import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./styles.less";

var root = createRoot(document.getElementById("app"));
root.render(<App name="Susan" />);