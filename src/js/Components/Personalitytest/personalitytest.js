import "../../../css/personalitytest.css";
import { Banner } from "../Common/banner";
/* 
Personalitytest
contains the Banner and the Test
*/
import { Test } from "./test";
export class Personalitytest extends HTMLElement {
  constructor() {
    super();
    const bannerconfig = {
      containerId: "test_banner_container",
      bannerId: "test_banner",
      imgId: "test_banner_img",
      descId: "test_banner_desc",
      h1: "Personality Test",
      h2: "Find out who you realy are!",
    };
    this.banner = new Banner(bannerconfig);
    this.test = new Test();
  }
  //appends the banner and the test to the wrapper
  connectedCallback() {
    this.render();
    let test_wrapper = document.getElementById("personalitiestest_wrapper");
    test_wrapper.prepend(this.banner);
    test_wrapper.append(this.test);
  }

  //dsiplays the banner and the test
  render() {
    this.innerHTML = `<section id="personalitiestest_wrapper"> </section>`;
  }
}
customElements.define("personalitytest-component", Personalitytest);
