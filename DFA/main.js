const textField = document.getElementById("email-field");
const outputMessage = document.getElementById("output-message");

const INVALID_EMAIL_STRING = "INVALID";
const VALID_EMAIL_STRING = "VALID";

let ab = new AutomataBuilder();
let afd = new AFD(
  ab.alphabet,
  ab.states[0],
  ab.states[0],
  ab.transitions,
  ab.states
);

function onVerificarClick() {
  afd.char = "";
  if (!textField.value) {
    invalidEmail();
  }
  if (afd.validateString(textField.value)) {
    validEmail();
  } else {
    invalidEmail();
  }
}

function invalidEmail() {
  outputMessage.innerHTML = INVALID_EMAIL_STRING;
  outputMessage.style.color = "#cf3232";
  outputMessage.style.display = "block";
}

function validEmail() {
  outputMessage.innerHTML = VALID_EMAIL_STRING;
  outputMessage.style.display = "block";
  outputMessage.style.color = "#349c22";
}

function hideOutput() {
  outputMessage.style.display = "none";
}
