//Function for fixed back to top button
let btn = document.getElementById("btn-up");
console.log(btn);
window.addEventListener('scroll', function (){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }
});

//Function to go back to top
document.querySelector(".btn-up").addEventListener("click", ()=>{
    console.log("hello world");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Show and hide Menu for small screens
const navmenu = document.getElementById("nav-menu"),
      navtogg = document.getElementById("nav-toggle"),
      navclose = document.getElementById("nav-close"),
      navlink = document.querySelectorAll(".nav_link");

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

//hide menu after clicking nav menus
navlink.forEach(nav =>{
    nav.addEventListener('click', ()=>{
        navmenu.classList.remove('show-menu');
    })
})

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

//Display Form
let pages = document.querySelectorAll("section");
var formbtn = document.getElementById("contact");
var form = document.querySelector(".hidden-form");
var formclose = document.querySelector(".btn-close-form");
formbtn.addEventListener('click', ()=>{
    // pages.forEach(page => {
    //     page.classList.add("blur-body");
    // });
        form.classList.add("display-form");
})
formclose.addEventListener('click', ()=>{
    form.classList.remove("display-form");
    page.classList.remove("blur-body");
})


//animation vanish
// var home = document.querySelector(".home-section");
// var about = document.querySelector(".about-section");
// var windowHeight = window.innerHeight;
// window.addEventListener("scroll", 
//     function(){
//             var dispTop = home.getBoundingClientRect().top;
//             if (dispTop < (windowHeight - 1150)){
//                 home.classList.add("blur-one");
//             }
//             else{
//                 home.classList.remove("blur-one");
//         }
      
//     });



//skills progress bar
let skills = document.querySelector(".skills-section");
let valuecontainer = document.querySelectorAll(".skills-percentage-circle");
let progressbar = document.querySelectorAll(".circular-progress");
// console.log(Number(container)+20);

let progressval = 0;
let speed = 500;
        valuecontainer.forEach(elem => {
            endval = (Number(elem.textContent));
            console.log(endval);
        });
        let progress = setInterval(()=>{
        progressval++;
        let data = progressval+'%';
        for (let i=0; i<valuecontainer.length; i++) {
            valuecontainer[i].innerHTML = data;   
        }
        if(progressval === endval){
                clearInterval(progress);
            }   
        progressbar.forEach(bar =>{
            bar.style.background = 'conic-gradient(#e7183b '+progressval * 3.6+'deg, #f38c9d '+progressval * 3.6+'deg)';
        })
    });
  
    
//Portfolio Swiper
let swiper = new Swiper(".mySwiper", {
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
var swiper1 = new Swiper(".mySwiper1", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
