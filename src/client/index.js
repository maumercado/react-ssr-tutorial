// startup point for the client side application
// Treat this file as a normal entry point for a react app
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

ReactDOM.hydrate(<Home />, document.querySelector("#root"));
