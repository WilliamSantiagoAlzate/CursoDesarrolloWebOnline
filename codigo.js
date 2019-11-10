console.log("Soy el mejor");
const menu = document.querySelector(".menu");
const burgerButton = document.querySelector(".burger-button");
const ventana = window.matchMedia("screen and (max-width: 767px)");

ventana.addListener(validation);

validation(ventana);

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener("click", hideShow);
  } else {
    burgerButton.removeEventListener("click", hideShow);
  }
}

function  hideShow() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
  }
}
