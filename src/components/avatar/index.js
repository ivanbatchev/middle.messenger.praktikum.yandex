import Handlebars from "handlebars";
import tmpl from "./avatar.hbs?raw";
import "./avatar.scss";

export default (src, width, height) => {
  return Handlebars.compile(tmpl)({ src, width, height });
};
