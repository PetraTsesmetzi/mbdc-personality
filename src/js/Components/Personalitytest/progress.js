import { store } from "./../Common/store";
/* 
prints the progressbar
*/
export class Progress extends HTMLElement {
  constructor() {
    super();

    this.store = store;
    this.subscriber = this.shouldUpdate.bind(this);
    this.store.subscribe(this.subscriber);

    this.startPosition = 0;
    this.endPosition = 0;
  }
  connectedCallback() {
    this.render();
  }
  shouldUpdate() {
    if (this.store.previousState.progress.counter != this.store.state.progress.counter) {
      this.endPosition = this.store.state.progress.counter;

      let progressing = setInterval(() => {
        this.startPosition += 1;
        this.render();
        if (this.startPosition >= this.endPosition) {
          clearInterval(progressing);
        }
      }, 65);
    }
  }
  render() {
    this.innerHTML = `
    <section id="test_header">
        <div id="progress_section">
            <div id="progress_number">${this.startPosition}%
            </div>
            <div id="progress">
                <div id="progress_bar" style="width:${this.startPosition}%">
                </div>
            </div>
        </div>
    </section>`;
  }
}
customElements.define("progress-component", Progress);
