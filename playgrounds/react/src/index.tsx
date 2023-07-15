import React from "react";
import ReactDOM from "react-dom";
import { Color, Margin } from "@design-system/react";

import "@design-system/scss/lib/Button.css";
import "@design-system/scss/lib/Utilities.css";
import "@design-system/scss/lib/Margin.css";

ReactDOM.render(
  <div>
    <Margin left>
      <Color hexCode="#000" />
    </Margin>
  </div>,
  document.querySelector("#root")
);
