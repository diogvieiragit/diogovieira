const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const body = document.body;

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    body.classList.toggle("overflow-hidden"); // Impede rolagem ao abrir o menu
});



/*--------------------------------------------------------------------*/

function scrollCarousel(direction) {
    const carousel = document.querySelector(".carousel");
    const scrollAmount = 350; // Ajuste para definir o quanto rola por clique
    carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}




const carousel = document.querySelector(".carousel");

let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    carousel.classList.add("active");
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.scrollBehavior = "auto"; 
});

carousel.addEventListener("mouseleave", () => {
    isDown = false;
    carousel.classList.remove("active");
});

carousel.addEventListener("mouseup", () => {
    isDown = false;
    carousel.classList.remove("active");
});

carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX); 
    carousel.scrollLeft = scrollLeft - walk;
});

/*--------------------------------------------------------------------*/






