import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

if (process.env.NODE_ENV === "production") {
	console.log = () => { };
	console.error = () => { };
	console.debug = () => { };
}

root.render(
	<App />
);