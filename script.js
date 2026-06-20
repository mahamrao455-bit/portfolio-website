// typing animation
const texts = ["Frontend Developer", "UI Designer", "Video Editor"];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = texts[i];

  if (!isDeleting) {
    document.getElementById("typing").innerHTML =
      current.substring(0, j++);
    
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").innerHTML =
      current.substring(0, j--);

    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

type();

// hamburger menu
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}