/* import NavBar from "./js/Navigation/NavBar"; */

import Index from "./js/Routing/index.js";
import "./css/general.css";
import "./css/footer.css";

document.addEventListener("DOMContentLoaded", () => {
  // stop animation if device has been rotated
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize_animation_stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize_animation_stopper");
    }, 400);
  });
  new Index();
});
