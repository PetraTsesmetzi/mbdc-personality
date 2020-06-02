import "../../../css/personality.css";
import { store } from "../Common/store";

export class Personality extends HTMLElement {
  constructor() {
    super();
    this.personality = JSON.parse(localStorage.getItem("personality"));
    this.store = store;
    this.subscriber = this.load.bind(this);
    this.store.subscribe(this.subscriber);
    this.imgPath = "";
    this.render(this.personality.type);
  }

  connectedCallback() {}

  load() {
    if (this.store.previousState.personality.type != this.store.state.personality.type) {
      this.type = this.store.state.personality.type;
      this.render(this.type);
    }
  }
  disconnectedCallback() {
    this.store.unsubscribe(this.subscriber);
  }
  render(type) {
    import(`../../../img/thumbnail${type.img}`).then((image) => {
      this.innerHTML = `
      <section id="personality_banner_container">
        <div id="personality_banner">
          <div id="personality_banner_img">
            <img src="${image.default}" alt="${type.title}-image"/>
          </div>
          <div id="personality_banner_desc">
            <h1>${type.title}</h1>
            <h2>${type.caption}</h2>
          </div>
        </div>
      </section>
      <section id="personality_content" class="type">
        <div class="container_left">
          <h1>PERSONALITY</h1>
        </div>
        <div class="container_right">
          <h1>${type.title}- ${type.caption}</h1>
          <p>${type.description}</p>
          <p><span class="personality-attributes">STRENGTH: </span><span> ${type.strength}</span></p>
          <p><span class="personality-attributes">WEAKNESS: </span><span> ${type.weakness} </span></p>
        </div>
      </section>`;
    });
  }
}
customElements.define("personality-component", Personality);
