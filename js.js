document.querySelector(".rightcontainer").style.float='left';

function a(){
    document.querySelector(".h").style.display="block";
    document.querySelector(".a").style.display="block";
    document.querySelector(".s").style.display="block";
    document.querySelector(".c").style.display="block";
    document.querySelector(".p").style.display="block";
    document.querySelector(".hamburger").style.display="none";
    document.querySelector(".header").style.backgroundColor = 'black';
    document.querySelector(".header").style.height = '100vh';
    document.querySelector(".header").style.width = '30%';
    document.querySelector(".rightcontainer").style.width = '70%';
    document.querySelector(".p").innerHTML = "\u00d7";
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
        document.querySelector(".header").style.height = '100vh';
        document.querySelector(".header").style.width = '100%';
        document.querySelector(".rightcontainer").style.width = '0%';
        document.querySelector(".rightcontainer").style.display="none";
        document.querySelector(".rightcontainer").style.float='left';
      }

}
function p(){
    document.querySelector(".h").style.display="none";
    document.querySelector(".a").style.display="none";
    document.querySelector(".s").style.display="none";
    document.querySelector(".c").style.display="none";
    document.querySelector(".p").style.display="none";
  document.querySelector(".rightcontainer").style.marginright= '50%';
    
  document.querySelector(".header").style.width = '5%';
    
    document.querySelector(".hamburger").style.display="block";
    document.querySelector(".header").style.backgroundColor = 'black';
    document.querySelector(".header").style.height = '50px';
    document.querySelector(".rightcontainer").style.float='left';
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
   
        document.querySelector(".header").style.width = '10%';
        document.querySelector(".rightcontainer").style.width = '90%';
        document.querySelector(".rightcontainer").style.display="flex";
      }
}

let typed = new Typed(".span-type",{
  strings : ["Roshan Khanal"],
  typeSpeed:150,
  backSpeed:150,
  loop:true
})
