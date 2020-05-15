export class Personalitytest extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `<div style="height:100px; background-color:crimson">
          <span>I am the test</span>
          </div>`;
  }
}
customElements.define("personalitytest-component", Personalitytest);
