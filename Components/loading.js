const loadingHTML = `<div class="loadingChild w-full h-full fixed bg-dark z-[60] flex justify-center items-center"> <img class="w-[30vw] sm:w-[12vw]" src="../assets/logo/logo.svg" alt=""> </div>`;

let loadingQuery = document.querySelector(".loading");
loadingQuery.innerHTML = loadingHTML;


let loadingChild = document.querySelector(".loadingChild")
loadingChild.classList.add("hidden")

const logic = () => { 
window.addEventListener("load", () => { 
    setTimeout(() => {
        loadingChild.classList.add("hidden")
    })
}
   
)}
