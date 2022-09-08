import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import theme from './theme';
import {ThemeProvider} from 'styled-components';
import App from "./App";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    , document.getElementById("root")
);
