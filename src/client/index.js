// startup point for the client side application
// Treat this file as a normal entry point for a react app
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

ReactDOM.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.querySelector("#root")
);
