import Handlebars from "handlebars";
import tmpl from "./link.hbs?raw";
import "./link.scss";

export default (href, text) => {
  return Handlebars.compile(tmpl)({ href, text });
};
