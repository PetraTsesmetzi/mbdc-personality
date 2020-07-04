/* 
app.js
entrypoint for the app
creates a index object
stops animations if the device has been rotated
*/

import Index from "./js/Routing/index.js";
import "./css/general.css";
/* import "./css/footer.css"; */

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
