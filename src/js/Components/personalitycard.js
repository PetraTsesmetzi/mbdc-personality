import "../../css/personalities.css";

export class Personalitycard extends HTMLElement {
  constructor(type) {
    super();
    this.type = type;
  }
  connectedCallback() {
    this.render();
  }
  render() {
    /*  let path = pathToImg(`./banner_index.png`);
    console.log(path); */
    let path = this.type.img;
    import(`../../img/thumbnail${path}`).then((image) => {
      this.innerHTML = `
      <a href="personality.html" onclick="sendType(1)">
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
      </a>
   
  `;
    });
  }
}

customElements.define("personalitycard-component", Personalitycard);
