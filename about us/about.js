
let Animation =()=>{
    let par = document.querySelectorAll('.main');
    let leftAnime = document.querySelectorAll('.left_anime');
    let rightAnime = document.querySelectorAll('.right_anime');
    let pictureAnime = document.querySelectorAll('.picture_anime');
    let pictureAnime2 = document.querySelectorAll('.picture_anime2');
   const show ={
    distance:"20%",
    delay:250,
    opacity:0.5,
    origin:"bottom",
    reset:true,
       left:{
        distance:"10%",
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
        distance:"3%",
        delay:200,
        opacity:0.3,
        reset:true,
        scale:0.5,
        easing: 'ease-out',
    },
       pictureTwo:{
        distance:"1%",
        delay:200,
        opacity:0.3,
        reset:true,
        scale:1.2,
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