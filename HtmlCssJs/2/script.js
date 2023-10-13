function submitForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;

  const genderCheckboxes = document.querySelectorAll(
    'input[type="radio"]:checked'
  );
  const gender = Array.from(genderCheckboxes)
    .map((cb) => cb.nextElementSibling.textContent)
    .join(", ");

  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  if (
    firstName &&
    lastName &&
    dob &&
    country &&
    gender &&
    profession &&
    email &&
    mobile
  ) {
    document.getElementById("popupFirstName").textContent = firstName;
    document.getElementById("popupLastName").textContent = lastName;
    document.getElementById("popupDob").textContent = dob;
    document.getElementById("popupCountry").textContent = country;
    document.getElementById("popupGender").textContent = gender;
    document.getElementById("popupProfession").textContent = profession;
    document.getElementById("popupEmail").textContent = email;
    document.getElementById("popupMobile").textContent = mobile;

    document.getElementById("popup").style.display = "flex";
  } else {
    alert("Please fill in all fields.");
  }
}

function resetForm() {
  document.getElementById("surveyForm").reset();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  resetForm();
}
if (submitForm === true) {
  document.getElementById("popup").style = "flex";
} else {
  document.getElementById("popup").style.display = "none";
}
