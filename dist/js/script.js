// Navabar fixed
window.onscroll =function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if(window.pageYOffset > fixedNav){
    header.classList.add('navbar-fixed')
  }else{
    header.classList.remove('navbar-fixed')
  }
}
// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')


hamburger.addEventListener('click',function(){ 
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden')
});

// Heart
const heart1 = document.querySelectorAll('#heart')
heart1.forEach(val => {
  val.addEventListener('click',function(){ 
    val.classList.toggle('text-danger');
    val.classList.toggle('text-secondary');
    val.classList.toggle('heart-animation')
  });
})

// Contact Send Button
const button = document.querySelector('#send-contact')
button.addEventListener('click',function(){
  button.classList.add('send-animation')
  setTimeout(() => {
    button.classList.remove('send-animation')
  }, 251);
})