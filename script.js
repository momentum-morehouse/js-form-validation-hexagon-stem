let customerName = document.getElementById("name-field");

customerName.addEventListener("input", function () {
  if (customerName.validity.typeMismatch) {
    customerName.setCustomValidity("input-valid");
  } else {
    customerName.setCustomValidity("input-invalid");
  }
});