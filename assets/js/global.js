import "../css/global.css";
import "./infinitescroll.js";
import noframe from "reframe.js";

function ready(fn) {
  document.addEventListener("DOMContentLoaded", fn);
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    fn();
  }
}

ready(() => {
  noframe("iframe");
});
