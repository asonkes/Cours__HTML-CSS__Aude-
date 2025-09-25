const arrows = document.querySelectorAll(".list__span--li span .icon");
const submenu = document.querySelectorAll(".submenu");
const li = document.querySelectorAll(".submenu li")
const liLink = document.querySelectorAll(".submenu li a");

arrows.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
    
        submenu[index].classList.toggle("active");
        liLink[index].classList.toggle("active");
        li[index].classList.toggle("active");
    })
})
