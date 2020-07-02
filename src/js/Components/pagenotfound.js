import "./../../css/pagenotfound.css";
/* Pagenotfound
displays a 404 page
*/
export class Pagenotfound extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `<div class="pagenotfound">
          <div>Page Not Found</div>
          </div>`;
  }
}

customElements.define("pagenotfound-component", Pagenotfound);
