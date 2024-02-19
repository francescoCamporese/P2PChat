import React from "react";
import "./styles/styles.scss";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Error from "./pages/Error";
import Home from "./pages/Home";

export default function App() {
    return (
        <React.Fragment>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Router>
            </Provider>
        </React.Fragment>
    );
};