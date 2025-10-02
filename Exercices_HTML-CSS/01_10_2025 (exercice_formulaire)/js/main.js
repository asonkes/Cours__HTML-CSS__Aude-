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

/***********************************************/
/* Ici on fait avec le bouton js le mode clair */
/***********************************************/
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

/*******************/
/** Pour le header */
/*******************/
const header = document.querySelector("header");
const headerMenu = document.querySelector(".header__menu");

/**************************/
/** Pour la page artistes */
/**************************/
const cardItems = document.querySelectorAll(".cardItems");
const cardImage = document.querySelectorAll(".photo");
const cardText = document.querySelectorAll(".text");
 
/*******************/
/** Pour le footer */
/*******************/
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

/**********************************************/
/** Ici pour designer la select du formulaire */
/**********************************************/
/** On initialise les variables dont on a besoin */

// On prend le parent général pour faire l'évènement au click
const select = document.querySelector(".selectParent");
// On sélectionne la liste pour la rendre visible ou pas
const ul = document.querySelector(".selectParent ul");
// Sélectionne la flèche vers le bas
const iconDown = document.querySelector(".iconDown");
// Sélectionne la flèche vers le bas
const iconUp = document.querySelector(".iconUp");
// Et ici, il faut sélectionner tous les "li" de la liste
const liDataValue = document.querySelectorAll(".selectParent ul li");
// Sert pour intégrer la valeur de ce que l'on va sélectionner dans le faux "select"
const inputValue = document.getElementById("hiddenInput");
// Ici, on prend l'input sur lequel la valeur du texte est mis
const selectTitle = document.querySelector(".selectParent__title .title");

select.addEventListener("click", () => {
    ul.classList.toggle("active");
    iconDown.classList.toggle("active");
    iconUp.classList.toggle("active");
})

// Donc on sélectionne toutes les "li"
liDataValue.forEach(element => {

    // On fait un évènement au click sur les "li"
    element.addEventListener("click", () => {
    
    // Ici on sélectionne la "div" du titre pour pouvoir changer le titre
    // que qd on clique par exemple sur "jeck", c'est ça qui s'affiche
    // et c'est grâce à "element", car ce sont les "elements" qu'on a sélectionné au début
    // Que l'on insère dans le "p" où il y a le titre.
    selectTitle.textContent = element.textContent;

    // Maintenant on va incorporer la valeur que l'on a récolté pour qu'elle soit envoyée
    inputValue.value = element.getAttribute("data-value");
    })
})

/********************************/
/** Ici le button du formulaire */
/********************************/
/** On initialise les variables dont on a besoin */
const form = document.getElementById("form");

const lastnameParent = document.getElementById("error1");
const lastname = document.getElementById("lastname");

const emailParent = document.getElementById("error2");
const email = document.getElementById("email");

const passwordParent = document.getElementById("error3");
const password = document.getElementById("password");

const textareaParent = document.getElementById("error4");
const textarea = document.getElementById("message");
// Ici on créé le span avant 
// et en fonction du fait que l'on remplisse ou pas les caractères
// Le message apparait ou disparait
const newElement = document.createElement("span");
newElement.classList.add("textareaError");
textareaParent.appendChild(newElement);

textarea.addEventListener("input", () => {
    let textareaValue = textarea.value.length; 
    
    if(textareaValue >= 255) {
        newElement.textContent = `* Le nombre de caractère est limité à 255`;
    } else {
        newElement.textContent = '';
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(lastname.value === "") {
        isValid = false;
        
        const newElement = document.createElement("span");
        newElement.classList.add("errorSpan");
        newElement.textContent = `* Veuillez compléter le champ vide svp !`
        lastnameParent.appendChild(newElement);
    }

    if(email.value === "") {
        isValid = false;
        
        const newElement = document.createElement("span");
        newElement.classList.add("errorSpan");
        newElement.textContent = `* Veuillez compléter le champ vide svp !`
        emailParent.appendChild(newElement);
    }

    if(password.value === "") {
        isValid = false;
        
        const newElement = document.createElement("span");
        newElement.classList.add("errorSpan");
        newElement.textContent = `* Veuillez compléter le champ vide svp !`
        passwordParent.appendChild(newElement);
    }

    // Si tout est valide, on peut envoyer les données)
    if (isValid) {
    form.submit();
    }
})
