import { router, navigate } from "./utils";
import "./styles/index.scss";

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigate(e.target.href);
    }
  });

  router();
});
