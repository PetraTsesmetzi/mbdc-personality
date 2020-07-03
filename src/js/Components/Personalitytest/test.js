import { Progress } from "./progress";
import { Page } from "./page";
import { TestValidator } from "./testvalidator";
import questions from "../../../data/questions.json";
import { store } from "../Common/store";
import { increaseProgress } from "../../Routing/actions";
import { resetProgress } from "../../Routing/actions";
import { Viewportdetector } from "../Common/viewportdetector";
import { Score } from "./score";
import { loadRoute } from "../../Routing/actions";
import { sendTestresult } from "../../Routing/actions";
/*
Test
contains a page with questions and a next button
each page has 5 questions
there are 4 pages
*/
export class Test extends HTMLElement {
  //sets the variables for start and endpoint for the questions
  //creates the progressbar object
  //sets a testresult arry to collect the answers
  constructor() {
    super();
    this.questions_data = questions;
    this.numberOfQuestions = this.questions_data.length / 4;
    this.start_question = 0;
    this.end_question = this.numberOfQuestions;
    this.page = null;
    this.store = store;
    this.Progress = new Progress();
    this.testresult = [];
    this.Score = null;
  }
  //after pushing the next button
  //creates a TestValidator object to validate if each question was answered
  //if the Testdorm is valide the getTestResultmethode will be called
  //also the start and end variables will be set to their new values for the new page of questions
  handleClick() {
    let radios = document.querySelectorAll(".radios");
    let error_message = document.getElementById("error_message");
    let TestFormValidator = new TestValidator(
      radios,
      error_message,
      this.numberOfQuestions,
      true
    );
    if (TestFormValidator.formChecked) {
      this.start_question += this.numberOfQuestions;
      this.end_question += this.numberOfQuestions;
      window.scrollTo(0, Viewportdetector.detectStartPosition());
      this.getTestResult(radios);
      this.render(this.start_question, this.end_question);
    }
  }
  //after pressing a radio
  //checks if a questions was answered
  //increases the progress if question were answered
  //sets datatpressed attribute of the 2 radios of a question
  handleChange(event) {
    let radios = document.querySelectorAll(".radios");
    let error_message = document.getElementById("error_message");
    let TestQuestion = new TestValidator(
      radios,
      error_message,
      this.numberOfQuestions,
      false
    );

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
  //displays the test with 5 questions with errormessage
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
  //the next page with questions or a score object will be crated and the testresult site will be loaded

  loadcontent(start, end) {
    if (start < this.questions_data.length) {
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
  // resets the error-color of radios when unanswered question was answered
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
