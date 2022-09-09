function changeTitle() {

    var subhidedr = document.getElementById('subhider');

    subhidedr.innerHTML = 'A FULL STACK DEV';
    // $('.subtitle').css('color','green')
}



const navbar = document.querySelector(".navbar");
const navLink = document.querySelector(".nav-link");
 

window.onscroll = function () {
//   this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    if( this.scrollY > 20){
        navbar.classList.add("sticky")
        navLink.classList.add("dark");
        $('.css-3').fadeIn();
        $('.html').fadeIn();
        $('.bootstrap').fadeIn();
        $('.js').fadeIn();
    
    }else {
        navbar.classList.remove("sticky");
        navLink.classList.remove("text-dark");
        $('.css-3').hide();
        $('.html').hide();
        $('.bootstrap').hide();
        $('.js').hide();
    }

}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  function myFunction() {
    alert("Can you contact me on this number 77*******  ");
  }