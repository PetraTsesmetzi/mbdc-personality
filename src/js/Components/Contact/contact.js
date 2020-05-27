import "./../../../css/contact.css";
import { Banner } from "../Common/banner";
import { ContactForm } from "./contactform";

export class Contact extends HTMLElement {
  constructor() {
    super();
    const bannerconfig = {
      containerId: "contact_banner_container",
      bannerId: "contact_banner",
      imgId: "contact_banner_img",
      descId: "contact_banner_desc",
      h1: "Contact Us",
      h2: "If you have some qustions, dont don't hesitate!",
    };
    this.banner = new Banner(bannerconfig);
    this.contactform = new ContactForm();
  }
  connectedCallback() {
    this.render();
    let test_wrapper = document.getElementById("contactcontainer_wrapper");
    test_wrapper.prepend(this.banner);
    test_wrapper.append(this.contactform);
  }
  render() {
    this.innerHTML = `<section id="contactcontainer_wrapper"> </section>`;
  }
}

customElements.define("contact-component", Contact);
