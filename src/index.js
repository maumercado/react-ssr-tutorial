import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(
    "/api",
    proxy("http://react-ssr-api.herokuapp.com", {
        proxyReqOptDecorator(opts) {
            opts.headers["x-forwarded-host"] = "localhost:3000";
            return opts;
        }
    })
);

app.use(express.static("public"));

app.get("*", async (req, res) => {
    const store = createStore(req);

    // Because promises.all stops all it's promises when one fails
    // we need to wrap the promises in resolve promises, so promise.all
    // actually executes all requests, that way we are able to
    // load all data possible of our app from our server.
    const promises = matchRoutes(Routes, req.path)
        .map(({ route }) => {
            return route.loadData ? route.loadData(store) : null;
        })
        .map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve);
                });
            }
        });

    await Promise.all(promises);

    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
        return res.redirect(301, context.url);
    }

    if (context.notFound) {
        res.status(404);
    }

    res.send(content);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
