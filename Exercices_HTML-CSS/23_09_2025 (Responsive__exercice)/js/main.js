/** On fait le menu burger */

const burger = document.querySelector(".header__burger");
const ul = document.querySelector(".header__menu ul");

const iconBurger = document.querySelector(".iconBurger");
console.log(iconBurger);

const iconCross = document.querySelector(".iconCross");
console.log(iconCross);

burger.addEventListener("click", (event) => {
    event.stopPropagation();

    ul.classList.toggle("active");
    iconBurger.classList.toggle("active");
    iconCross.classList.toggle("active");
})

document.addEventListener("click", () => {
    ul.classList.remove("active");
    iconBurger.classList.remove("active");
    iconCross.classList.remove("active");
})

