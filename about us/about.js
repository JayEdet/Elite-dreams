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
 /*  let offcanvas = new bootstrap.Offcanvas(document.querySelector('.offcanvas'))

links=document.querySelectorAll('.offcanvas a');
links.forEach((canvasoff)=>{
    canvasoff.addEventListener('click',()=>{
        offcanvas.hide()
    })
}) */
/* header footer manager */
/* class specialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <header id="header">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid px-5" id="navbar-div">
                <a class="navbar-brand logo" href="#header"><img src="./photos/elitedreams logo1.jpg" alt="" class="img-fluid"></a>
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                    <li class="nav-item">
                      <a class="nav-link" href="home.htm">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./about us/about.html">About us</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Properties</a>
                    </li>
                    <li class="nav-item nav-btn">
                      <a class="nav-link btn px-3 " href="#" >contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
       </header>`
    }
  }
  class specialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <footer class="bg-dark pt-5 nav-item">
        <div class="row mx-3">
          <div class="col col-lg-6 ">
            <div class="logo mb-5">
  
              <a class="navbar-brand picture_anime" href="#header"><img src="./photos/elitedreams logo1.jpg" alt="" class="img-fluid"></a>
            </div>
           
           <p class="social-links"> <a href="#"><i class="fa-solid fa-envelope links"></i> ElitedreamsRealtyltd@gmail.com</a> </p>
           <p class="social-links"> <a href="#"><i class="fa-solid fa-phone links"></i> +234 8131 922 120</a> </p>
          </div>
  
          <div class="col-lg-3 text-white my-3">
            <h4>Quick links</h4>
            <p class="social-links"><a href="#">Home</a></p>
            <p class="social-links"><a href="#">About us</a></p>
            <p class="social-links"><a href="#">Our properties</a></p>
            <p class="social-links"><a href="#">Services</a></p>
            <p class="social-links"><a href="#">Blog</a></p>
            <p class="social-links"><a href="#">Contact</a></p>
          </div>
          <div class="col-lg-3 my-3">
            <h4 class="text-white">Stay connected</h4>
           <p class="social-links"><i class="fa-brands fa-facebook links"></i><a href="#"> Facebook</a></p>
           <p class="social-links"><i class="fa-brands fa-twitter links"></i><a href="#"> Twitter</a></p>
           <p class="social-links"><i class="fa-brands fa-instagram links"></i><a href="#"> Instagram</a></p>
           <p class="social-links"><i class="fa-brands fa-whatsapp links"></i><a href="#"> Whatsapp</a></p>
          </div>
          </div>
          <hr class="text-white">
          <p class="text text-center text-light">&copy; 2024 Elitedreams Realty. All Rights Reserved</p>
        </footer>
        `
    }
  }
  customElements.define('special-header',specialHeader)
  customElements.define('special-footer',specialFooter) */