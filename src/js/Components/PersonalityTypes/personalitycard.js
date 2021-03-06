import { store } from "../Common/store";
import { loadRoute } from "../../Routing/actions";
import { sendType } from "../../Routing/actions";

/* 
Personalitycard

displays each card of personalities
*/
export class Personalitycard extends HTMLElement {
  //sets the store, type and nested route
  constructor(type) {
    super();
    this.type = type;
    this.store = store;
    this.route = {
      path: `personalitytypes/personality_${this.type.id}`,
    };
  }
  //stores the type to localstorage for that case if you leave the app and going back with the backbutton of the browser
  //dispatching the round and type to the store
  handleClick() {
    localStorage.setItem("personality", JSON.stringify({ type: this.type }));
    this.store.dispatch(loadRoute({ path: this.route.path }));
    this.store.dispatch(sendType({ type: this.type }));
  }
  //every card gets a eventlister click
  connectedCallback() {
    this.render();
    this.addEventListener("click", this.handleClick);
  }
  //displays the cards
  render() {
    let path = this.type.img_s;
    import(`../../../img/thumbnail${path}`).then((image) => {
      this.innerHTML = `
      <li>
        <div class="personalities_card">
            <div class="img_wrapper">
             <img src=${image.default} alt="name"/>
            </div>
          <div class="card_desc_slide">
            <div class="card_text">
                <h2>${this.type.title}</h2>
                <p>${this.type.caption}</p>
            </div>
          </div>
        </div>
      </li>`;
    });
  }
}

customElements.define("personalitycard-component", Personalitycard);
