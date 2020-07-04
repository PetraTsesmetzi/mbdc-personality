import { FooterComponent } from "./footercompnent";
/* 
Footer
implements the footercomponent
*/
export class Footer {
  //appends the footercomponent to the footercontainer
  constructor() {
    let footer = document.getElementsByClassName("footer_container")[0];
    footer.appendChild(new FooterComponent());
  }
}
