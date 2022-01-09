
// AOS

  AOS.init({
    duration: 800,
    easing: 'slide',
    once: true
});


// header scroll

let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}



// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
});



// owl carousel

$(document).ready(function(){

  $('.client-slider-section').owlCarousel({

    margin: 20,
    items:1,
    loop: true,
    autoplay: true,
    nav:false,
    // navText:[ $('.owl-navigation.owl-nav-prev'),$('.owl-navigation.owl-nav-next')] ,
    autoplayTimeout: 4000,

  });



  wow = new WOW();
  wow.init();


});