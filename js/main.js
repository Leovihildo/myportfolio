// Show and hide Menu for small screens
const navmenu = document.getElementById("nav-menu"),
      navtogg = document.getElementById("nav-toggle"),
      navclose = document.getElementById("nav-close");

if (navtogg){
    navtogg.addEventListener("click", function(){
        navmenu.classList.add('show-menu');
    })
}

// to hide the menu
if(navclose){
    navclose.addEventListener("click", function(){
        navmenu.classList.remove('show-menu');
    })
}

// Educational and work experiences
const sel = document.querySelectorAll('[data-target]'),
    contents = document.querySelectorAll('[data-content]'),
    // underline = document.querySelectorAll('.edu-btn'),
    edu = document.querySelector('.edu'),
    work = document.querySelector('.work');

sel.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        contents.forEach(content =>{
            content.classList.remove('selected');
        })
        target.classList.add('selected');
        tab.forEach(tab =>{
            tab.classList.remove('selected');
        })
        tab.classList.add('selected');
    })
})
// Add and remove colourful underline(border-bottom) to experience tabs
edu.addEventListener('click', ()=>{
    edu.classList.add('underline');
    work.classList.remove('underline');
})
work.addEventListener('click', ()=>{
    work.classList.add('underline');
    edu.classList.remove('underline');
})

//Display and Hide Portfolio

var arrowone = document.querySelector(".arrow-down-one");
var arrowtwo = document.querySelector(".arrow-down-two");
let graphic = document.querySelector(".graphic-container");
let frontend = document.querySelector(".frontend-container");
let iconone = document.querySelector(".arrow-down-one-icon");
let icontwo = document.querySelector(".arrow-down-two-icon");

arrowone.addEventListener("click", ()=>{
    if (graphic.style.display === "none"){
        graphic.style.display = "block";
        iconone.classList.add("upside-down");
    }
    else{
        graphic.style.display = 'none';
        iconone.classList.remove("upside-down");
    }
});

arrowtwo.addEventListener("click", ()=>{
    if (frontend.style.display === "none"){
        frontend.style.display = "block";
        icontwo.classList.add("upside-down")
    }
    else{
        frontend.style.display = 'none';
        icontwo.classList.remove("upside-down");
    }
});


//Portfolio Swiper

let swiper = new swiper(".graphic-container", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});