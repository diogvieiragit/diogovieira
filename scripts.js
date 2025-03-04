const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const body = document.body;

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    body.classList.toggle("overflow-hidden"); // Impede rolagem ao abrir o menu
});




/*-------------------------------------------------------------------*/



const icons = {
    "monitor-icon": {
        default: "./assets/images/home/rectangle-duotone.svg",
        hover: "./assets/images/home/rectangle-fill.svg"
    },
    "eye-icon": {
        default: "./assets/images/home/eye-closed-duotone.svg",
        hover: "./assets/images/home/eye-fill.svg"
    },
    "book-icon": {
        default: "./assets/images/home/book-duotone.svg",
        hover: "./assets/images/home/book-open-text-fill.svg"
    }
};



function applyHoverEffect(img, isHovering) {
    const id = img.id;

    if (icons[id]) {
        img.style.opacity = 0;
        setTimeout(() => {
            img.src = isHovering ? icons[id].hover : icons[id].default;
            img.style.opacity = 1;
            if (id === "monitor-icon") {
                if (isHovering) {
                    img.classList.add('glow');
                } else {
                    img.classList.remove('glow');
                }
            }
        }, 200);
    }
}


let activeIcon = null;


function resetActiveIcon() {
    if (activeIcon) {
        applyHoverEffect(activeIcon, false); 
        activeIcon = null; 
    }
}


document.querySelectorAll('.icon').forEach(img => {
    // Eventos para desktop (hover)
    img.addEventListener('mouseover', () => applyHoverEffect(img, true));
    img.addEventListener('mouseout', () => applyHoverEffect(img, false));

    // Eventos para dispositivos móveis (toque)
    ['click', 'touchstart'].forEach(evt => {
        img.addEventListener(evt, (event) => {
            event.preventDefault(); // Evita comportamento indesejado
            event.stopImmediatePropagation(); 
    
            if (activeIcon === img) {
                resetActiveIcon();
            } else {
                resetActiveIcon();
                applyHoverEffect(img, true);
                activeIcon = img;
            }
        });
    });
    
    
});

// Fecha o ícone ativo ao clicar fora dele
document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('icon')) {
        resetActiveIcon(); // Reseta ícones se o clique for fora de um ícone
    }
});

/*--------------------------------------------------------------------*/

function scrollCarousel(direction) {
    const carousel = document.querySelector(".carousel");
    const scrollAmount = 350; // Ajuste para definir o quanto rola por clique
    carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}



