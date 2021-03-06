import "../../../css/testresult.css";
import { store } from "../Common/store";
import { Resultproperties } from "../Personalitytest/resultproperties";

/* 
Testresult
shows the testresult
 */
export class Testresult extends HTMLElement {
  //subscribes to the store
  //reads the localStorage
  constructor() {
    super();
    let testresult = JSON.parse(localStorage.getItem("testresult"));
    this.result = testresult.result;
    this.store = store;
    this.subscriber = this.load.bind(this);
    this.store.subscribe(this.subscriber);
  }
  //if a resultobject exist the rendermethode will use it
  connectedCallback() {
    if (this.result) this.render(this.result);
  }
  //gets the updated resultobject from the store
  //and calls the render methode
  load() {
    let result = this.store.state.testresult.result;
    this.render(result);
  }
  //unscribes to the store
  disconnectedCallback() {
    this.store.unsubscribe(this.subscriber);
  }
  //displays the banner and created a Resultproperties object.
  render(result) {
    import(`../../../img/thumbnail${result.imgPath_l}`).then((image) => {
      this.innerHTML = `
    <section id="result_banner_container">
      <div id="result_banner">
          <div id="result_banner_img">
           <img src="${image.default}" alt="${result.label[0].Name}-image"/>
          </div>
          <div id="result_banner_desc">
              <h1>${result.label[0].Name}</h1>
              <h2>${result.label[1].Type}</h2>
          </div>
      </div>
    </section>
    <section id="result_container" >
      <section id="result_header" >
          <h1>Congrats!</h1> 
          <h1>You are like ${result.label[0].Name}</h1>
      </section>
      <section id="result_wrapper">
          <div id="result_content"></div>
      </section>
    </section>`;
      let result_content = document.getElementById("result_content");
      let properties = new Resultproperties(result);
      result_content.appendChild(properties);
    });
  }
}
customElements.define("testresult-component", Testresult);
