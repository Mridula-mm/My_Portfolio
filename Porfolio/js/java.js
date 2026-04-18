// SCROLL REVEAL ANIMATION
const revealElements = () => {
  const reveals = document.querySelectorAll(".reveal");
  
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealElements);
// Run on load in case elements are already in view
window.addEventListener("load", revealElements);