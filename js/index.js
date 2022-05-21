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

//HAMBUGER MENU
const mainMenu = document.querySelector(".mainmenu");
const closeMenu = document.querySelector(".closemenu");
const openMenu = document.querySelector(".openmenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-100%";
}
