import { store } from "./../Common/store";

/* 
Progress
prints the progressbar
*/
export class Progress extends HTMLElement {
  constructor() {
    super();
    console.log("progressconstructor");
    this.startPosition = 0;
    this.endPosition = 0;
    this.store = store;
    this.subscriber = this.shouldUpdate.bind(this);
    this.store.subscribe(this.subscriber);
  }
  connectedCallback() {
    this.render();
  }
  //if a question was answered the progressbar gets the update
  //if the last question was answered the progressbar will be unsubscribed
  shouldUpdate() {
    if (this.store.previousState.progress.counter != this.store.state.progress.counter) {
      this.endPosition = this.store.state.progress.counter;

      let progressing = setInterval(() => {
        this.startPosition += 1;

        this.render();

        if (this.startPosition >= this.endPosition) {
          clearInterval(progressing);
          if (this.startPosition >= 100) {
            this.startPosition = 0;
            this.unscribe();
          }
        }
      }, 65);
    }
  }

  //unscribes from store
  unscribe() {
    this.store.unsubscribe(this.subscriber);
  }
  //displays the progressbar
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
