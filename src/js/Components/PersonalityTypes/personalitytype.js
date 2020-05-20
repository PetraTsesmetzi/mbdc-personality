import "../../../css/personalities.css";
import { store } from "../../Common/store";
import { Personalitycard } from "./personalitycard";
import { Banner } from "../../Common/banner";
import { personalities } from "../../../data/personalities";
export class Personalitytype extends HTMLElement {
  constructor() {
    super();
    const bannerconfig = {
      containerId: "personalities_banner_container",
      bannerId: "personalities_banner",
      imgId: "personalities_banner_img",
      descId: "personalities_banner_desc",
      h1: "Personality Types",
      h2: "Explore the 16 DC Universe Characters!",
    };
    this.banner = new Banner(bannerconfig);
    console.log(this.banner);
  }
  connectedCallback() {
    this.render();
    let gallery_wrapper = document.getElementById("gallery_list");
    Object.values(personalities).map((type) => {
      let card = new Personalitycard(type);
      gallery_wrapper.appendChild(card);
    });
  }
  render() {
    this.innerHTML = `${this.banner.getbanner} 
    <section id="personalities_content">
    <div id="personalities_header">
     <h1>FEATURED PERSONALTIES</h1>
    </div>
    <div id="personalities_gallery">
      <div id="gallery_wrapper"><ul id="gallery_list"></ul></div>
    </div>
    </section>
  
  `;
  }
}

customElements.define("personalites-component", Personalitytype);
