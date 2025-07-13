
const loginForm = document.querySelector(".login-form");
const inputFields = document.querySelectorAll("input");
const formLabels = document.querySelectorAll("label");

inputFields.forEach((field) => {
  field.setAttribute("class", "form-input");
});

formLabels.forEach((label) => {
  label.setAttribute("class", "form-label");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.target.elements;
  const userData = {};

  if (email.value === "" || password.value === "") {
    alert("All form fields must be filled in");
  } else {
    userData.email = email.value.trim();
    userData.password = password.value.trim();
    console.log(userData);
    loginForm.reset();
  }
});