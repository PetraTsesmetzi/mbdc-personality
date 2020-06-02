import email_icon from "../../../img/email.png";
import place_icon from "../../../img/place.png";
import exclamation_icon from "../../../img/exclamation_circle.png";
import { ContactFormValidator } from "./contactvalidator";
export class ContactForm extends HTMLElement {
  constructor() {
    super();
  }
  handleSubmit(e) {
    e.preventDefault();

    const contactFormValidator = new ContactFormValidator();
  }
  connectedCallback() {
    this.render();
    const submit_btn = document.getElementById("submit_btn");
    submit_btn.addEventListener("click", this.handleSubmit.bind(this));
  }
  render() {
    this.innerHTML = `<section id="contact_content">
      <div id="contact_wrapper">
      <section id="contact_1">
        <div id="contact_container_1">
          <h1>Let's get in touch!</h1>
          <p>
            <span
              ><img
                src="${email_icon}"
                alt="email_icon"
                id="mail"/></span
            ><span> meyersbriggs@gmail.com</span>
          </p>
          <p>
            <span
              ><img
                src="${place_icon}"
                alt="place_icon"
                id="place"/></span
            ><span> Berlin, Germany</span>
          </p>
        </div>
      </section>

      <section id="contact_2">
        <div id="contact_container_2">
         
         <form id="form"  action="#" novalidate>
            <div class="contact_row ">
              <div class="form_control">
                <input
                  type="text"
                  id="firstname"
                  class="form_input"
                  name="firstname"
                  placeholder="Your name..."
                />    
                <img src="${exclamation_icon}"  class="check_icons exclamation_circle"></img>
              </div>
              <div class="error_message"></div>
            </div>
            <div class="contact_row">
              
              <div class="form_control">
                <input
                  type="text"
                  id="lastname"
                  class="form_input"
                  name="lasttname"
                  placeholder="Your last name..."
                />
               
                <img src="${exclamation_icon}"  class="check_icons exclamation_circle"></img>
              </div>
              <div class="error_message"></div>
            </div>
            <div class="contact_row">
           
              <div class="form_control">
                <input
                  type="email"
                  id="email"
                  class="form_input"
                  name="email"
                  placeholder="youremail@gmx.de"
                />
              
                <img src="${exclamation_icon}"  class="check_icons exclamation_circle"></img>
              </div>
              <div class="error_message"></div>
            </div>
            <div class="contact_row">

              <div class="form_control">
                <textarea
                  id="comments"
                  class="form_input"
                  name="comments"
                  rows="4"
                  placeholder="Write something..."
                ></textarea>
               
               
                <img src="${exclamation_icon}"  class="check_icons exclamation_circle"></img>
              </div>
              <div class="error_message"></div>
              <div class="sent_successfully">Your message was sent successfully!</div>
            </div>
          
            <div class="contact_row" >
              <div class="form_control">
                <button 
                  id="submit_btn"
                  class="form_submit_btn"
                  value="Send"
                >SEND MESSAGE</button>
              </div>
            </div>
          </form> 
        </div>
      </section>
    </div>
  </section>`;
  }
}
customElements.define("contactform-component", ContactForm);
