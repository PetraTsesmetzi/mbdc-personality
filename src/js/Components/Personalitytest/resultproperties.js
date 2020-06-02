import "../../../css/resultproperties.css";
export class Resultproperties extends HTMLElement {
  constructor(result) {
    super();
    this.result = result;
  }
  handleClick(event) {
    let desc = event.target.nextElementSibling;
    desc.classList.toggle("show");
  }

  connectedCallback() {
    this.render(this.result);
    let desc_buttons = document.getElementsByClassName("desc_button");
    console.log(desc_buttons);
    [...desc_buttons].map((desc_btn) => {
      desc_btn.addEventListener("click", this.handleClick.bind(this));
    });
  }
  render(result) {
    for (let i = 0; i < result.body.length; i++) {
      let percentage_active_1 = "";
      let text_active_1 = "";
      let percentage_active_2 = "";
      let text_active_2 = "";
      if (result.body[i].percentage_1 > 50) {
        text_active_1 = "text_active";
        percentage_active_1 = "percentage_active";
        text_active_2 = "";
        percentage_active_2 = "";
      }
      if (result.body[i].percentage_2 > 50) {
        text_active_2 = "text_active";
        percentage_active_2 = "percentage_active";
        text_active_1 = "";
        percentage_active_1 = "";
      }

      this.innerHTML += `
              <div class="result_row">
                <h1>${result.body[i].caption}</h1>
                <p class="caption_desc">${result.body[i].caption_description}</p>
                <div class="resultbar_container">
                    <div class="percentage_text_left">
                        <p class="percentage_num_left ${text_active_1}">${result.body[i].percentage_1}%</p>
                        <p class="percentage_desc_left ${text_active_1}">Extraverted</p>
                    </div>
                    <div class="percantage_container">
                        <div class="percentage_left ${percentage_active_1}" style="width:${result.body[i].percentage_1}%;">
                        </div>
                        <div class="percentage_right ${percentage_active_2}" style="width:${result.body[i].percentage_2}%;">
                        </div>
                    </div>
                    <div class="percentage_text_right">
                        <p class="percentage_num_right ${text_active_2}"> ${result.body[i].percentage_2}%</p>
                        <p class="percentage_desc_right ${text_active_2}">Introverted</p>
                    </div>
                </div>
                <div id="id_${i}" class="desc_button">
                </div>
                <div class="desc">
                    <h1>${result.body[i].header}</h1>
                    <p>${result.body[i].description}</p>
                </div>
              </div>`;
    }
  }
}
customElements.define("resultproperties-component", Resultproperties);
