let typed = new Typed(".span-type",{
  strings : ["Contact Us"],
  typeSpeed:150,
  backSpeed:150,
  loop:true
})
let followus = new Typed(".follow-us",{
  strings : ["Follow Us"],
  typeSpeed:150,
  backSpeed:150,
  loop:true
})


function a(){
    document.querySelector(".h").style.display="block";
    document.querySelector(".a").style.display="block";
    document.querySelector(".s").style.display="block";
    document.querySelector(".c").style.display="block";
    document.querySelector(".p").style.display="block";
    document.querySelector(".header").style.backgroundColor = 'black';
    document.querySelector(".header").style.height = '100vh';
    document.querySelector(".hamburger").style.display="none";
    document.querySelector(".header").style.width = '30%';
    document.querySelector(".p").innerHTML = "\u00d7";
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
        document.querySelector(".box").style.display="none";
        
        document.querySelector(".header").style.height = '100vh';
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
    document.querySelector(".header").style.backgroundColor = 'white';
    document.querySelector(".header").style.height = '0px';
    document.querySelector(".box").style.marginright= '50%';
    
    document.querySelector(".header").style.width = '5%';
      
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
      document.querySelector(".header").style.width = '10%';
      document.querySelector(".box").style.width = '90%';
      document.querySelector(".box").style.display="block";
       

      }
}
