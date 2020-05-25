import { store } from "./../Common/store";
/* 
prints the progressbar
*/
export class Progress extends HTMLElement {
  constructor() {
    super();
    this.progressNumber = 0;
    this.store = store;
    this.subscriber = this.shouldUpdate.bind(this);
    this.store.subscribe(this.subscriber);
  }
  connectedCallback() {
    this.render();
  }
  shouldUpdate() {
    if (this.store.previousState.progress.counter != this.store.state.progress.counter) {
      this.progressNumber = this.store.state.progress.counter;
      this.render();
    }
  }
  render() {
    this.innerHTML = `
    <section id="test_header">
        <div id="progress_section">
            <div id="progress_number">${this.progressNumber}%
            </div>
            <div id="progress">
                <div id="progress_bar" style="width:${this.progressNumber}%">
                </div>
            </div>
        </div>
    </section>`;
  }
}
customElements.define("progress-component", Progress);
