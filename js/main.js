import { getUser } from "./functions.js";

// get icon light
const iconLight = document.querySelector("[data-light]");
const title = document.querySelector(".title");
const input = document.querySelector("[data-input]");
const buttonSearch = document.querySelector("[data-search]");



// event
iconLight.addEventListener("click", function (e)  {
        e.target.classList.toggle("fas");
        e.target.classList.toggle("light-mode-color");
        document.body.classList.toggle("light-mode");
        title.classList.toggle("light-mode-color");
})

buttonSearch.addEventListener("click", function (e)  {
    e.preventDefault();
    if(input.value === "") {
        alert("the field can't be empty")
    }else {
        getUser(input.value);
        input.value = "";
    }
})


