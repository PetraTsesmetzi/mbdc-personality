import "./../../css/footer.css";
/* 
FooterComponent
creates the footer
*/
export class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  //displays the footer
  render() {
    this.innerHTML = ` 
      <div class="footer_wrapper">
        <div class="copyright">
          ©2019 @Petra Tsesmetzi
        </div>
        <nav class="links">
          <ul>
            <li>Contact</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </nav>
        <nav class="follow_us">
          <ul>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/"
                class="social_media twitter"
              ></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/"
                class="social_media facebook"
              ></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.pinterest.de/"
                class="social_media pinterest"
              ></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.snapchat.com"
                class="social_media snapchat"
              ></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/?hl=de"
                class="social_media instagram"
              ></a>
            </li>
          </ul>
        </nav>

        <div class="disclaimer">
          <p>
            Disclaimer: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur vero architecto, qui sit, repudiandae natus nobis laudantium
            similique
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define("footer-component", FooterComponent);
