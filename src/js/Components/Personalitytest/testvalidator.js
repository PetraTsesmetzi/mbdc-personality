/*
TestValidator
check if radiobutton were pressed
sets errormessage
set errorcolor to the radiobuttons
*/
export class TestValidator {
  constructor(radios, error_message, end, flag) {
    this.checked = false;
    this.checkForm(radios, error_message, end, flag);
  }
  //checks if for each question one of the 2 radios buttons was pressed
  checkForm(radios, error_message, end, flag) {
    let allchecked = [];
    let j = 0;
    for (let k = 0; k < end; k++) {
      let questionchecked = [];
      for (let i = j; i <= j + 1; i++) {
        if (radios[i].checked == true) {
          allchecked.push(true);
        } else {
          questionchecked.push(false);
        }
      }

      if (questionchecked.length == 2) {
        for (let i = j; i <= j + 1; i++) {
          if (flag) {
            this.setColorOfBtn(radios[i]);
          }
        }
      }
      j += 2;
    }
    if (allchecked.length < 5) {
      this.checked = false;
      if (flag) this.showErrorMessage(error_message);
    } else {
      this.checked = true;
      this.hideErrorMessage(error_message);
    }
  }
  //sets the css class "error"
  setColorOfBtn(radio) {
    radio.nextElementSibling.classList.add("error");
  }
  //sets the css class "error_message_active"
  showErrorMessage(error_message) {
    error_message.classList.add("error_message_active");
  }
  //removes the css class "error_message_active"
  hideErrorMessage(error_message) {
    error_message.classList.remove("error_message_active");
  }
  //returns true or false
  get formChecked() {
    return this.checked;
  }
}
