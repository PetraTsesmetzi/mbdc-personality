import "./../../css/nav.css";

/* shwows and hide the complete navbar if you scroll */
export class Navbar {
  constructor() {
    this.lastScroll = 0;
    this.body = document.querySelector(".body");
    window.addEventListener("scroll", this.showAndHide.bind(this));
  }

  showAndHide() {
    if (window.scrollY > this.lastScroll && window.scrollY > 100) {
      if (!this.body.classList.contains("hide")) {
        this.body.classList.add("hide");
      }
    } else if (window.scrollY < this.lastScroll) {
      if (this.body.classList.contains("hide")) {
        this.body.classList.remove("hide");
      }
    }
    this.lastScroll = window.scrollY;
  }
}
