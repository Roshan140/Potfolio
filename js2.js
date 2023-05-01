const mediaQuery = window.matchMedia('(max-width: 767px)');
if (mediaQuery.matches) {
  document.querySelector("body").style.height="0vh"

  }
function a(){
    document.querySelector(".h").style.display="block";
    document.querySelector(".a").style.display="block";
    document.querySelector(".s").style.display="block";
    document.querySelector(".c").style.display="block";
    document.querySelector(".p").style.display="block";
    document.querySelector(".header").style.backgroundColor = 'black';
    document.querySelector(".header").style.height = 'auto';
    document.querySelector(".header").style.width = '30%';
    document.querySelector(".about").style.width = '70%';
    document.querySelector(".hamburger").style.display="none";
    document.querySelector(".p").innerHTML = "\u00d7";
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
        document.querySelector(".about").style.display="none";
        
        document.querySelector(".header").style.height = '200vh';
        document.querySelector(".header").style.width = '100%';

      }
}
function p(){
    document.querySelector(".h").style.display="none";
    document.querySelector(".a").style.display="none";
    document.querySelector(".s").style.display="none";
    document.querySelector(".c").style.display="none";
    document.querySelector(".p").style.display="none";
    document.querySelector(".hamburger").style.display="block";
    document.querySelector(".header").style.backgroundColor = 'black';
    document.querySelector(".header").style.width = '30px';
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
        document.querySelector(".header").style.backgroundColor = 'black';
        document.querySelector(".header").style.height = '-1px';
        document.querySelector(".about").style.display="block";
        document.querySelector("body").style.height="0vh"

      }
}
