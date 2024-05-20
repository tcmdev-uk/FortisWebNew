

let gsapAnimations = () => { 
    //Hero bricks
    let heroBricks = document.querySelectorAll(".heroSectionBricks")
    window.addEventListener("load", () => { 
        
        
    heroBricks.forEach(element => {
        gsap.from(element, {right: "0", bottom:"0", top:"0", left:"0", duration:"1", rotate:0, opacity:0})
        setTimeout(() => {
            gsap.to(element, {y:"7", yoyo: true, repeat: -1, duration: 2,})
      
       element.addEventListener("mouseover", () => { 
        gsap.to(element, {scale: 1.2} )
       })

       element.addEventListener("mouseout", () => { 
        gsap.to(element, {scale: 1})
       })
    
    });


    let makeBigger = document.querySelectorAll(".makeBigger");

    makeBigger.forEach((e, i) => {
        e.addEventListener("mouseover", (event) => { 
            gsap.to(e, { scale: 1.04});
        });

        e.addEventListener("mouseout", (event) => { 
            gsap.to(e, { scale: 1.0, });
        });
    });
}, 500);



})



}
gsapAnimations()

const servicesSection = () => { 
    let openServicesNode = document.querySelectorAll(".openServicesNode")
    let servicesParagraph = document.querySelectorAll(".servicesNodeParagraph")
    let serviceTitle = document.querySelectorAll(".serviceTitle")

    openServicesNode.forEach((e, i) => {
        e.addEventListener("click", () => { 
            servicesParagraph[i].classList.toggle("hidden")
            if(e.innerText == "+") { 
                e.innerText = "-"
            } else {e.innerText = "+"}

          
            serviceTitle[i].addEventListener("click", () => { 
                servicesParagraph[i].classList.toggle("hidden")
            })
            
            
            gsap.from(servicesParagraph[i], {y:-5})
        })
    });
}

const fadeOnView = () => { 
    let fadeElements = document.querySelectorAll(".goUp");
    
    fadeElements.forEach(element => {
        let elementPosition = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight) {
            gsap.from(element, { opacity: 0, duration: 1 });
        }
    });
}
fadeOnView()
servicesSection()

