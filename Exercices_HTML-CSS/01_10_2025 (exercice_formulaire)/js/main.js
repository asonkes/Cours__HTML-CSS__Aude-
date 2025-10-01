/* On initialise les variables dont ont a besoin */
const menu = document.querySelector(".header__menu");
const burger = document.querySelector(".header__burger--menu");
const cross = document.querySelector(".header__burger--cross");


burger.addEventListener("click", (event) => {
    event.stopPropagation();

    menu.classList.toggle("active");
    burger.classList.toggle("active");
    cross.classList.toggle("active");
})

document.addEventListener("click", () => {
    menu.classList.remove("active");
    burger.classList.remove("active");
    cross.classList.remove("active");
})

/* Ici on fait avec le bouton js le mode clair */
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

/* Ici on fait en sorte d'ajouter des classes actives */


/** Pour le header */
const header = document.querySelector("header");
const headerMenu = document.querySelector(".header__menu");

/** Pour la page artistes */
const cardItems = document.querySelectorAll(".cardItems");
const cardImage = document.querySelectorAll(".photo");
const cardText = document.querySelectorAll(".text");
 
/** Pour le footer */
const footer = document.querySelector("footer");

sun.addEventListener("click", (event) => {
    event.preventDefault();

    /** l'icone soleil disparait en mode sombre */
    moon.classList.add("active");
    sun.classList.add("active");

    /** Pour le header */
    header.classList.add("light");
    headerMenu.classList.add("light");

    /** Pour le footer */
    footer.classList.add("light");

    /** Pour la page artiste */
    cardItems.forEach(element => {
        element.classList.add("light");
    })

    cardImage.forEach(element => {
        element.classList.add("light");
    })

    cardText.forEach(element => {
        element.classList.add("light");
    })
})

moon.addEventListener("click", (event) => {
    event.preventDefault();

    /** l'icone soleil disparait en mode sombre */
    moon.classList.remove("active");
    sun.classList.remove("active");

    /** Pour le header */
    header.classList.remove("light");
    headerMenu.classList.remove("light");

    /** Pour le footer */
    footer.classList.remove("light");

    /** Pour la page artiste */
    cardItems.forEach(element => {
        element.classList.remove("light");
    })

    cardImage.forEach(element => {
        element.classList.remove("light");
    })

    cardText.forEach(element => {
        element.classList.remove("light");
    })
})