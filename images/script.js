const arrows = document.querySelectorAll("[data-button]");

arrows.forEach(i =>{
    i.addEventListener("click", ()=>{
        const offset = i.dataset.bx === "right" ? 1 :-1;
        const slides = i.closest("[data-caurosel]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if(newIndex < 0) newIndex = slides.children.length - 1;
        if(newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})