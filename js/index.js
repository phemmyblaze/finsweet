const button = document.querySelector("#btn");
const form = document.querySelector("#my-form");
const userName = document.querySelector("#name");
// const location = document.querySelector("#location");
const phone = document.querySelector("#phone");
const details = document.querySelector("#details");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (userName.value === "" || phone.value === "" || details.value === "") {
    alert("Please enter the following information");
  } else if (phone.value === "") {
    alert("Please enter phone number");
  } else if (details.value === "") {
    alert("Please enter details");
  } else {
    alert(`Message sent`);
  }
}
