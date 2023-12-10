(() => {
window.addEventListener("load", function () {
 
    const sections = document.querySelectorAll(" #project-container, #experience-container, #contact-form");
  
    
    sections.forEach((section) => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%", 
          end: "bottom 100%", 
          scrub: true, 
        },
      });
  
      
      tl.fromTo(section, { opacity: 0.1 }, { opacity: 1, duration: 1 });
     });
   });
   
})();
  