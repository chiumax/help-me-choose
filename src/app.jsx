// import validator from 'validator';
import React from "react";
import ReactDOM from "react-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

import HelpMeChooseApp from "./components/HelpMeChooseApp.jsx";

ReactDOM.render(<HelpMeChooseApp />, document.getElementById("app"));
// babel src/app.jsx --out-file=scripts/app.js --presets=env,react --watch
// live-server
