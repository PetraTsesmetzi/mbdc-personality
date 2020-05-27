export class ContactFormValidator {
  constructor() {
    this.form = document.getElementsByTagName("form");
    this.checkform(this.form[0]);
  }
  checkform(form) {
    const alltrue = [];
    [...form].forEach((input) => {
      if (input.name) {
        input.value.trim();
      }
      if (input.name === "firstname" && input.value === "") {
        this.setErrorFor(input, "firstname can not be blank!");
        alltrue.push(false);
      } else if (input.name === "firstname" && input.value !== "") {
        this.takeOffError(input);
        alltrue.push(true);
      }
      if (input.name === "lasttname" && input.value === "") {
        this.setErrorFor(input, "lastname can not be blank!");
        alltrue.push(false);
      } else if (input.name === "lasttname" && input.value !== "") {
        this.takeOffError(input);
        alltrue.push(true);
      }
      if (input.name === "email" && input.value === "") {
        this.setErrorFor(input, "email can not be blank!");
        alltrue.push(false);
      } else if (input.name === "email" && input.value !== "") {
        if (!this.isEmail(input.value)) {
          this.setErrorFor(input, "email is not valid");
          alltrue.push(false);
        } else {
          this.takeOffError(input);
          alltrue.push(true);
        }
      }
      if (input.name === "comments" && input.value === "") {
        this.setErrorFor(input, "comments can not be blank!");
        alltrue.push(false);
      } else if (input.name === "comments" && input.value !== "") {
        this.takeOffError(input);
        alltrue.push(true);
      }
    });
    if (!alltrue.includes(false)) {
      this.showFinalMessage();
      form.reset();
    }
  }
  setErrorFor(input, message) {
    const formcontrol = input.parentElement.parentElement;
    const errorContainer = formcontrol.querySelector(".error_message");
    errorContainer.innerText = message;
    formcontrol.className = "contact_row contactform-error";
  }
  takeOffError(input) {
    const formcontrol = input.parentElement.parentElement;
    const errorContainer = formcontrol.querySelector(".error_message");
    errorContainer.innerText = "";
    formcontrol.className = "contact_row";
  }
  isEmail(mail) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
  }
  showFinalMessage() {
    var finalMessage = document.getElementsByClassName("sent_successfully");
    finalMessage[0].classList.add("successfuly_active");
    setTimeout(() => {
      finalMessage[0].classList.remove("successfuly_active");
    }, 4000);
  }
}
