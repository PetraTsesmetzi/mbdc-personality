import { store } from "../Common/store";
import { Personality } from "./personality";

export class Personalities extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `<div style="height:100px; background-color:darkcyan">
          <span>I am the personality</span>
          </div>`;
  }
}

customElements.define("personalites-component", Personalities);
