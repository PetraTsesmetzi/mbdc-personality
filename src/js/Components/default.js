export class DefaultComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div style="height:100px; background-color:gold">
          <span>I am the home</span>
          </div>`;
  }
}

customElements.define("default-component", DefaultComponent);
