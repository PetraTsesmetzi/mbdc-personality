/* import { questions_data } from "../../../data/questions"; */
import questions from "../../../data/questions.json";
import { Questions } from "./questions";
import { Viewportdetector } from "../Common/viewportdetector";
/* 
prints the page with 5 questions
*/
export class Page extends HTMLElement {
  //set the values for the start and en question for each page
  constructor(start, end) {
    super();
    this.start = start;
    this.end = end;
    this.data = questions.slice(this.start, this.end);
  }
  //scrolls to the next question after pressing a radio
  handleChange(e) {
    let startPosition = document.documentElement.scrollTop;
    let endPosition = startPosition + Viewportdetector.detectDistance();
    let scrolling = setInterval(function () {
      window.scrollTo(0, startPosition);
      startPosition += 10;
      if (startPosition >= endPosition) clearInterval(scrolling);
    }, 20);
  }
  //reads the questions of the questions object
  //and set to each input(radio) an clic eventlister
  connectedCallback() {
    this.render();
    let question = document.getElementById("page");
    Object.values(this.data).map((data) => {
      let questions = new Questions(data);
      question.appendChild(questions);
    });
    let r_btns = document.getElementsByTagName("input");
    [...r_btns].forEach((input) => {
      input.addEventListener("click", this.handleChange);
    });
  }
  //dsiplays the page
  render() {
    this.innerHTML = `<section id="page">
    </section>`;
  }
}
customElements.define("page-component", Page);
