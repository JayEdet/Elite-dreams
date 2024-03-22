/* custom header stick */
window.onscroll = function() {myFunction()};

var navbar = document.querySelector("#navbar-div");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
/* images lazy loading */
document.addEventListener('DOMContentLoaded', function() {
  // Get all img elements
  var images = document.querySelectorAll('img');
  
  // Loop through each image element
  images.forEach(function(image) {
      // Add loading="lazy" attribute to each image
      image.setAttribute('loading', 'lazy');
  });
});

/* first swiper  */
var swiper = new Swiper(".mySwiper", {
 
    spaceBetween: 5,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
      
        768: {
            slidesPerView: 2,
        },
        992 :{
          slidesPerView: 3,
        }
    }
  });
  /* second swiper */
  
  /* gsap animation */
  let tl = gsap.timeline()
  tl.fromTo('.hero-text',{x:-100, },{x:0,duration:1.5, 
    stagger: 0.5,
    ease: "sine.out", 
    force3D: true, opacity:1});
    tl.fromTo('.first-select',{y:30},{y:0, duration:1.5,opacity:1, ease:"sine.out"},0.5)

  /* scrollReveal*/


 function Animation(){
  let par = document.querySelectorAll('.main');
  let leftAnime = document.querySelectorAll('.left_anime');
  let rightAnime = document.querySelectorAll('.right_anime');
  let pictureAnime = document.querySelectorAll('.picture_anime');
  let pictureAnime2 = document.querySelectorAll('.picture_anime2');
 const show ={
  distance:"10%",
  delay:250,
  opacity:0.5,
  origin:"bottom",
  reset:true,
     left:{
      distance:"100%",
      delay:100,
      opacity:0.5,
      origin:"left",
      reset:true,
  },
     right:{
      distance:"5%",
      delay:100,
      opacity:0.3,
      origin:"right",
      reset:true,
     
  },
     picture:{
      distance:"1%",
      delay:200,
      opacity:0.3,
      reset:true,
      scale:0.7,
      easing: 'ease-out',
  },
     pictureTwo:{
      distance:"1%",
      delay:200,
      opacity:0.3,
      reset:true,
      scale:1,
      easing: 'ease-in-out',
    
  }
 }
  par.forEach((mainpar)=>{
    let animePar = mainpar
    ScrollReveal().reveal(animePar, show)
    })
  leftAnime.forEach((leftanimate)=>{
    let leftAnimation = leftanimate
    ScrollReveal().reveal(leftAnimation, show.left)
    })
  rightAnime.forEach((rightanimate)=>{
    let rightAnimation = rightanimate
    ScrollReveal().reveal(rightAnimation, show.right)
    })
  pictureAnime.forEach((pictureAnimate)=>{
    let pictureAnimation = pictureAnimate
    ScrollReveal().reveal(pictureAnimation, show.picture)
    })
  pictureAnime2.forEach((pictureAnimate2)=>{
    let pictureAnimation2 = pictureAnimate2
    ScrollReveal().reveal(pictureAnimation2, show.pictureTwo)
    })
 


  }
Animation()

/* consistent header and footer */


