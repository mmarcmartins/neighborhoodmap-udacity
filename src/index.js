import React from "react";
import ReactDom from "react-dom";
import Mainpage from "./pages/Mainpage";
import * as OfflinePluginRuntime from "offline-plugin/runtime";

ReactDom.render(<Mainpage />, document.getElementById("app"));

OfflinePluginRuntime.install();
