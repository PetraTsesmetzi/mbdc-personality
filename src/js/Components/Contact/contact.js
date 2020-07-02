import "./../../../css/contact.css";
import { Banner } from "../Common/banner";
import { ContactForm } from "./contactform";
/* 
Contact
displays a banner and a contactform
*/
export class Contact extends HTMLElement {
  //creates a new banner  an a form object
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
  // appends the banner and the form object
  connectedCallback() {
    this.render();
    let test_wrapper = document.getElementById("contactcontainer_wrapper");
    test_wrapper.prepend(this.banner);
    test_wrapper.append(this.contactform);
  }
  //displays the banner an the form
  render() {
    this.innerHTML = `<section id="contactcontainer_wrapper"> </section>`;
  }
}

customElements.define("contact-component", Contact);
