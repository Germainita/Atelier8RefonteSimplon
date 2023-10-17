function afficher(){
       
  let menu= document.getElementById('MenuSec');
  let X_Bar = document.getElementById('X_Bar');
  let MenuBarx = document.getElementById("MenuBarx");
  let FooterContainer = document.getElementsByClassName('Footer_Container');
  let cach = document.getElementById('cach');
  // let cach1 = document.getElementById('cach1');
  menu.classList.add("menu-bar")
  for(let i=0; i<FooterContainer.length; i++){
    FooterContainer[i].classList.add("footer-bar");
  }
  cach.style.opacity=0;
  // cach1.style.opacity=0;    
}

function cacher(){
   let menu = document.getElementById('MenuSec');
   let X_Bar = document.getElementById('X_Bar');
   let MenuBarx = document.getElementById("MenuBarx");
   let FooterContainer = document.getElementsByClassName('Footer_Container');
   let cach = document.getElementById('cach');
   // let cach1 = document.getElementById('cach1');
   menu.remove('menu-bar');
   for(let i=0; i<FooterContainer.length; i++){
     FooterContainer[i].classList.remove('footer-bar');
     FooterContainer[i].classList.add("foo");
   }
   cach.style.opacity=1;
   // cach1.style.opacity=1;
   window.location.reload();
   console.log(FooterContainer);
}

      