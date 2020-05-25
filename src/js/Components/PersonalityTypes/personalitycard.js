import { store } from "../Common/store";
export class Personalitycard extends HTMLElement {
  constructor(type) {
    super();
    this.type = type;
    this.store = store;
    this.route = {
      path: `personalitytype/${this.type.title}`,
    };
  }
  handleClick() {
    /* richtung card */
    /*  this.store.dispatch(loadRoute({ path: this.route.path })); */
  }
  connectedCallback() {
    this.render();
    this.addEventListener("click", this.handleClick);
  }
  render() {
    let path = this.type.img;
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
