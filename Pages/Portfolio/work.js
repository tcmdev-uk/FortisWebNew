
const scrollIntoAnimations = () => { 
    const sections = document.querySelectorAll(".fadeUp");
    sections.forEach(section => {
        gsap.from(section, { opacity: 0, y: 50, duration: 0.4, scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }});
    });


    const fadeIn = document.querySelectorAll(".fadeIn")
    fadeIn.forEach(section => {
        gsap.from(section, { opacity: 0, scale:0.7, duration: 0.4, scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }});
    });
}
scrollIntoAnimations();


const scroll = () => {
gsap.registerPlugin(ScrollToPlugin)
window.addEventListener('load', () => {
  gsap.to(window, { scrollTo:".helped", duration:1.3});
});
}
