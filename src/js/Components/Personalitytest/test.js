import { Progress } from "./progress";
import { Page } from "./page";
import { TestValidator } from "./testvalidator";
import { questions_data } from "../../../data/questions";
import { store } from "../Common/store";
import { increaseProgress } from "../../Routing/actions";
import { resetProgress } from "../../Routing/actions";
import { Viewportdetector } from "../Common/viewportdetector";
import { Score } from "./score";
import { loadRoute } from "../../Routing/actions";
import { sendTestresult } from "../../Routing/actions";
/* 
contains a page(with questions) and a next button
loops through 4 pages until the test is valid and finished
*/
export class Test extends HTMLElement {
  constructor() {
    super();
    this.numberOfQuestions = questions_data.length / 4;
    this.start_question = 0;
    this.end_question = this.numberOfQuestions;
    this.counter = 1;
    this.page = null;
    this.store = store;
    this.Progress = new Progress();
    this.testresult = [];
    this.Score = null;
  }
  //after pushing the next button
  //validates the form goes to the next Page if its valide
  handleClick() {
    let radios = document.querySelectorAll(".radios");
    let error_message = document.getElementById("error_message");
    let TestForm = new TestValidator(radios, error_message, this.numberOfQuestions, true);
    if (TestForm.formChecked) {
      this.start_question += this.numberOfQuestions;
      this.end_question += this.numberOfQuestions;
      window.scrollTo(0, Viewportdetector.detectStartPosition());
      this.getTestResult(radios);
      this.render(this.start_question, this.end_question);
    }
  }
  //after pressing a radio
  // check if all 5 questions were answered
  //increases the progress if question were answered
  handleChange(event) {
    let radios = document.querySelectorAll(".radios");
    let error_message = document.getElementById("error_message");
    let TestQuestion = new TestValidator(
      radios,
      error_message,
      this.numberOfQuestions,
      false
    );
    if (TestQuestion.formChecked) {
      /*     console.log("letzter wurde rote wurde weggedrückt"); */
    }
    this.resetColorRadios(event, radios);

    if (event.target.getAttribute("data-pressed") != "true") {
      this.store.dispatch(increaseProgress(5));
    }
    [...radios].map((radio) => {
      if (radio.name == event.target.name) {
        event.target.setAttribute("data-pressed", true);
        radio.setAttribute("data-pressed", true);
      }
    });
  }
  connectedCallback() {
    this.render(this.start_question, this.end_question);
  }
  render(start, end) {
    this.innerHTML = `
    <section id="content_container"> 
      <section id="content_wrapper"> 
      </section>
      <p id="error_message" class="err_message">
        Please answer all questions!
      </p>
      <div id="btn_container">
        <div id="btn_next">Next</div>
      </div>
    </section>
   `;
    this.loadcontent(start, end);
  }
  //loads the content,create a page and a progress
  //after the last question was answered and the next button was pressed
  //the testresult will be loaded

  loadcontent(start, end) {
    if (start < questions_data.length) {
      this.page = new Page(start, end);
      let content_wrapper = document.getElementById("content_wrapper");

      content_wrapper.append(this.Progress);
      content_wrapper.append(this.page);
      this.radioBtns = document.querySelectorAll(".radios");
      this.radioBtns.forEach((radio) => {
        radio.addEventListener("change", this.handleChange.bind(this));
      });

      let button = document.getElementById("btn_next");
      button.addEventListener("click", this.handleClick.bind(this));
    } else {
      this.store.dispatch(resetProgress(0));
      this.Score = new Score(this.testresult);
      let resultObj = this.Score.getResultObj;
      localStorage.setItem("testresult", JSON.stringify({ result: resultObj }));
      this.store.dispatch(loadRoute({ path: "personalitytest/testresult" }));
      this.store.dispatch(sendTestresult({ result: resultObj }));
    }
  }
  //fills the testresult array with a- and b-answers for scoring
  getTestResult(radios) {
    if (radios) {
      [...radios].map((radio) => {
        if (radio.checked == true) {
          this.testresult.push(radio.getAttribute("data-result"));
        }
      });
    }
  }
  // resets the errorcolor of radios when unanswered question was answered
  resetColorRadios(event, radios) {
    let target;
    if (event.target.getAttribute("class") == "custom_radio") {
      target = event.target;
    } else {
      target = event.target.previousElementSibling;
    }

    let custom_radios = document.getElementsByClassName("custom_radio");
    [...radios].map((radio) => {
      if (radio.name == event.target.name) {
        [...custom_radios].map((custom_radio) => {
          if (radio.name == custom_radio.getAttribute("data-name")) {
            custom_radio.classList.remove("error");
          }
        });
      }
    });
  }
}
customElements.define("test-component", Test);
