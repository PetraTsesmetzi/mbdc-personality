export class Contact extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `<div style="height:100px; background-color:orange">
          <span>I am the contact</span>
          </div>`;
  }
}

customElements.define("contact-component", Contact);
