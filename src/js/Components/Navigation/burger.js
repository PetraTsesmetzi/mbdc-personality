import "./../../../css/burger.css";

/*
Burger Button-
sets the functionality of the burgerbutton for the nav and
resets classes if you resize your windows */
export class BurgerBtn {
  constructor(nav) {
    this.body = document.getElementsByTagName("body");
    this.navLinks = nav;
    this.burger = document.querySelector(".burger");
    this.burger.addEventListener("click", this.toggleMobileBtn.bind(this));
    window.addEventListener("resize", this.resetClassNavLinks.bind(this));
  }

  // toggles the burgerbutton to an close button and vice versa
  //stops the scrolling of the whole page
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
  //if the window will be resized and the window.iinerwith is greater then 992px and the navlinks contains the class show
  // the mobile nav menu will be closed
  resetClassNavLinks() {
    if (window.innerWidth >= 992 && this.navLinks.classList.contains("show")) {
      this.navLinks.classList.remove("show");
      this.burger.classList.remove("close");
    }
  }
}
