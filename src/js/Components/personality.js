export class Personality extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {}
}
customElements.define("personality-item", Personality);
