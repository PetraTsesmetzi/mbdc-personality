import "./../../../css/burger.css";
/* sets the functionality of the burgerbutton for the nav and
resets classes if you resize your windows */
export class BurgerBtn {
  constructor(nav) {
    this.body = document.getElementsByTagName("body");
    this.navLinks = nav;
    this.burger = document.querySelector(".burger");
    this.burger.addEventListener("click", this.toggleMobileBtn.bind(this));
    window.addEventListener("resize", this.resetClassNavLinks.bind(this));
  }

  toggleMobileBtn() {
    if (window.innerWidth < 992) {
      this.burger.classList.toggle("close");
      this.navLinks.classList.toggle("show");
    }
    if (this.navLinks.classList.contains("show")) {
      this.body[0].classList.add("stop-scrolling");
    }
    if (!this.navLinks.classList.contains("show")) {
      this.body[0].classList.remove("stop-scrolling");
    }
  }
  resetClassNavLinks() {
    if (window.innerWidth >= 992 && this.navLinks.classList.contains("show")) {
      this.navLinks.classList.remove("show");
      this.burger.classList.remove("close");
    }
  }
}
