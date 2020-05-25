import { questions_data } from "../../../data/questions";
import { increaseProgress } from "../../Routing/actions";
import { store } from "../Common/store";
/* 
prints the questions
*/
export class Questions extends HTMLElement {
  constructor(data) {
    super();
    this.data = data;
    this.pressed = false;
    this.store = store;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<fieldset>
            <legend>${this.data.question}</legend>
            <div>
            <p>
              <label class="label_a" for="${this.data.id_a}">
                <input class="radios" type="radio" name=${this.data.question_id} id="${this.data.id_a}" data-result="a" data-pressed="${this.pressed}" value="${this.data.answers.A}" />
                <span class="custom_radio" data-name="${this.data.question_id}"></span>
                  <span class="answers ">${this.data.answers.A}</span>
              </label>
            </p>
            <p>
              <label class="label_b" for="${this.data.id_b}">
                <input class="radios" type="radio" name=${this.data.question_id}  id="${this.data.id_b}" data-result="b" data-pressed="${this.pressed}" value="${this.data.answers.B}" />
                <span class="custom_radio" data-name="${this.data.question_id}" ></span>
                <span class="answers ">${this.data.answers.B}</span>
              </label>
            </p>
            </div>
          </fieldset>`;
  }
}
customElements.define("questions-component", Questions);
