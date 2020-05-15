export class Pagenotfound extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log("not found");
    this.render();
  }
  render() {
    this.innerHTML = `<div style="height:100px; background-color:darkred; color:#fff;">
          <span>Page not found</span>
          </div>`;
  }
}

customElements.define("pagenotfound-component", Pagenotfound);
