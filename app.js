




const heroSection = () => { 
    window.onload = function() {
        gsap.from(".mainTitle",{opacity:0, y:10} )
    }
}
heroSection()

const services = () => { 
    const serviceItems = document.querySelectorAll(".service")
    
    gsap.from(serviceItems, {
        scrollTrigger: {
          trigger: serviceItems,
          start: "",
          end: "bottom center",
          toggleActions: "play none none none",
        },
        ease: 'back',
        autoAlpha: 0,
        duration: 1.5,
        stagger: 0.3})
      
}
services()



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

const loadingBars = () => { 
    const loadingBars = document.querySelectorAll(".loadingBar")
    loadingBars.forEach(loading => { 
        gsap.from(loading, {width:0, duration:0.4, scrollTrigger: {
            trigger: loading,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }
        })

    })
}
loadingBars()


