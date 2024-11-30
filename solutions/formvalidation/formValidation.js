const popUpBtn = document.getElementById("popup");

function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting immediately

  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm-password");
  const age = document.querySelector("#age");

  // Validation conditions
  if (
    email.value.length === 0 ||
    password.value.length === 0 ||
    confirmPassword.value.length === 0 ||
    age.value.length === 0
  ) {
    alert("Please fill in all fields.");
    return; // Prevent further validation and form submission
  }

  if (password.value !== confirmPassword.value) {
    alert("Password and confirm password should be matching");
    return; // Prevent further validation and form submission
  }

  // If everything is valid, submit the form
  alert("Form submitted successfully!");
  form.submit(); // Submit the form programmatically if validation passes
}

const form = document.forms["validate"];

form.addEventListener("submit", validateForm);
