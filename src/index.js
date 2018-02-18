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
        proxyReqOptDecorator(ops) {
            opts.header["x-forwarded-host"] = "localhost:3000";
            return opts;
        }
    })
);

app.use(express.static("public"));

app.get("*", async (req, res) => {
    try {
        const store = createStore();

        const promises = matchRoutes(Routes, req.path).map(({ route }) => {
            return route.loadData ? route.loadData(store) : null;
        });

        await Promise.all(promises);

        res.send(renderer(req, store));
    } catch (err) {
        res.send(err).status(500);
    }
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
