import { store } from "../Common/store";
import { loadRoute } from "../../Routing/actions";
import { sendType } from "../../Routing/actions";
export class Personalitycard extends HTMLElement {
  constructor(type) {
    super();
    this.type = type;
    this.store = store;
    this.route = {
      path: `personalitytypes/personality_${this.type.id}`,
    };
  }
  handleClick() {
    /* richtung card */
    localStorage.setItem("personality", JSON.stringify({ type: this.type }));
    this.store.dispatch(loadRoute({ path: this.route.path }));
    this.store.dispatch(sendType({ type: this.type }));
  }
  connectedCallback() {
    this.render();
    this.addEventListener("click", this.handleClick);
  }
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
