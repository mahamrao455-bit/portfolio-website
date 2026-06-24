document.addEventListener("DOMContentLoaded", function(){

  const texts = ["Frontend Developer", "UI Designer", "Web Developer"];
  
  let i = 0;
  let j = 0;
  let isDeleting = false;
  
  function type(){
    let current = texts[i];
  
    document.getElementById("typing").innerHTML =
      current.substring(0,j);
  
    if(!isDeleting){
      j++;
      if(j > current.length){
        isDeleting = true;
        setTimeout(type,1000);
        return;
      }
    } else {
      j--;
      if(j === 0){
        isDeleting = false;
        i = (i+1) % texts.length;
      }
    }
  
    setTimeout(type, isDeleting ? 60 : 100);
  }
  
  type();
  
  window.toggleMenu = function(){
    document.getElementById("nav-links").classList.toggle("show");
  }
  
  window.scrollToProjects = function(){
    document.getElementById("projects").scrollIntoView({behavior:"smooth"});
  }
  
  });