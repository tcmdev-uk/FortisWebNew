const openFullscreen = () => { 
    let thumbnails = document.querySelectorAll(".websiteGallery");
    let fullscreen = document.querySelector(".fullScreenMode");
    let expanded = document.querySelector(".fullScreenChild");

    thumbnails.forEach((e) => {
        e.addEventListener("click", () => { 
            fullscreen.classList.toggle("hidden");
            fullscreen.classList.toggle("flex")
            expanded.style.backgroundImage = e.style.backgroundImage;
        });
    });

    let fullscreenExit = [fullscreen, document.querySelector(".exitFullScreen")];

    fullscreenExit.forEach(e => { 
        e.addEventListener("click", () => { 
            fullscreen.classList.toggle("hidden");
            fullscreen.classList.toggle("flex");
        });
    });
};

openFullscreen();