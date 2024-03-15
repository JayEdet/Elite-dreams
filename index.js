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
    var swiper2 = new Swiper(".swiper-container", {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

