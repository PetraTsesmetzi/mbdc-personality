/* import "./../../css/personalities.css"; */

export class Personalitycard extends HTMLElement {
  constructor(type) {
    super();
    this.type = type;
    console.log("p: " + type.title);
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <a href="personality.html" onclick="sendType(1)">
        <div class="personalities_card">
            <div class="img_wrapper">
              <img src=${this.type.img} alt="ENFJ_Wonderwoman">
            </div>
          <div class="card_desc_slide">
            <div class="card_text">
                <h2>${this.type.title}</h2>
                <p>${this.type.caption}</p>
            </div>
          </div>
        </div>
      </a>
   
  `;
  }
}

customElements.define("personalitycard-component", Personalitycard);
