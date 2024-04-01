
const ham = document.querySelector('.ham');
var nav_link =document.querySelector('.nav_link');
ham.addEventListener('click',()=>{
    ham.classList.toggle('transform')
    nav_link.classList.toggle('mobile')
})




window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".header");
var sticky = menu.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}