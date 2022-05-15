const button = document.querySelector("#btn");
const form = document.querySelector("#my-form");
const userName = document.querySelector("#name");
const message = document.querySelector(".msg");
const sent = document.querySelector(".sent");
const phone = document.querySelector("#phone");
const details = document.querySelector("#details");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (userName.value === "" || phone.value === "" || details.value === "") {
    message.classList.add("error");
    message.innerHTML = "Please enter all field";
  } else {
    message.classList.add("sent");
    message.innerHTML = "Successfull";
  }
}
