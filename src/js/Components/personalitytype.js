import "./../../css/personalities.css";
import { store } from "../Common/store";
import { Personalitycard } from "./personalitycard";
import { personalities } from "./../../data/personalities";
export class Personalitytype extends HTMLElement {
  connectedCallback() {
    this.render();
    let gallery_wrapper = document.getElementById("gallery_wrapper");
    console.log("keystest");
    let keys = Object.values(personalities).map((type) => {
      let card = new Personalitycard(type);
      gallery_wrapper.appendChild(card);
    });
  }
  render() {
    this.innerHTML = `<section id="personalities_banner_container">
      <div id="personalities_banner">
        <div id="personalities_banner_img"></div>
        <div id="personalities_banner_desc">
          <h1>Personality Types</h1>
          <h2>Explore the 16 DC Universe Characters!</h2>
        </div> 
      </div>
  </section>
  <section id="personalities_content">
   <div id="personalities_header">
     <h1>FEATURED PERSONALTIES</h1>
   </div>
   <div id="personalities_gallery">
      <div id="gallery_wrapper"></div>
    </div>
  </section>
  
  `;
  }
}

customElements.define("personalites-component", Personalitytype);
