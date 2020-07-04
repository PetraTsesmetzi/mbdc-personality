import { FooterComponent } from "./footercompnent";

export class Footer {
  constructor() {
    let footer = document.getElementsByClassName("footer_container")[0];
    footer.appendChild(new FooterComponent());
  }
}
