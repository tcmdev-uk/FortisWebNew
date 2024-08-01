const navbarHTML = `


  <section class="menu hidden overflow-auto  fixed w-full h-full bg-gray-800 z-40 bg-opacity-90 flex justify-center items-center">
        <div class="flex justify-center items-center flex-col relative  w-[80%]"> 
          <div class="flex flex-col text-center font-Custom gap-2"> 
          <a class="text-white sm:text-5xl text-4xl uppercase font-bold whitespace-nowrap menuLink" href="../../../index.html"> Home </a>
          <a class="text-white sm:text-5xl text-4xl uppercase font-bold whitespace-nowrap menuLink hidden" href="../../../Pages/Blog/hub.html"> Blog </a>
          <a class="text-white sm:text-5xl text-4xl uppercase font-bold whitespace-nowrap menuLink" href="../../../Pages/generalPages/contact.html"> Contact</a>
          <a class="text-white sm:text-5xl text-4xl uppercase font-bold whitespace-nowrap menuLink" href="../../../index.html#work"> Our Work </a>
            <script> 
           const menuLink = document.querySelector(".menuLink")
           const menu = document.querySelector(".menu")
           menuLink.addEventListener("click", () => { 
            console.log("")
            menu.classList.toggle("hidden")
           })


            </script>
 
        </div>
      
        </div> 
      
      
      </section>




<nav class="navbarchild border-gray-200d h-auto bg-transparent fixed top-0 w-full z-50">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-10">
  <a href="../../../index.html" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="../../../assets/logo/logo.svg" class="h-10 rounded-lg drop-shadow-2xl fortisLogo bg-gray-600 px-5 py-2" alt="Flowbite Logo" />
     
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center bg-gray-600 p-2 w-10 h-10 justify-center hamburgerButton text-sm text-white rounded-lg bg-gray-6
      00 focus:outline-none focus:ring-2 focus:ring-mainBlue " aria-controls="navbar-cta" aria-expanded="false">
       <img class="hamburgerIcon" src="../../../assets/GeneralIcons/menu.svg" alt="">
    </button>
  </div>
 
  </div>
  </nav>`;

let navbarQuery = document.querySelector("#navBar");

navbarQuery.innerHTML = navbarHTML;

let nav = document.querySelector(".navbarchild")


window.addEventListener("scroll", function() {
  if(window.scrollY > 400) { 
    gsap.to("nav", { backgroundColor: "" });  }

    else{
      gsap.to("nav", { backgroundColor: "" });  
    }
  
})

$(".hamburgerButton").click(function() {
  setTimeout(() => {
    $(".menu").toggleClass("hidden")
    gsap.to(".navbarchild", {backgroundColor:""})
    gsap.from(".menu", {opacity:0})
    
    $(".menu").toggleClass("Open")

    $(".fortisLogo").attr("src", $(".menu").hasClass("Open") ? "../../../assets/logo/fortisWhite.svg" : "../../../assets/logo/logo.svg");
    $(".hamburgerIcon").attr("src", $(".menu").hasClass("Open") ? "../../../assets/GeneralIcons/x.svg" : "../../../assets/GeneralIcons/menu.svg");
    
  }, 200);
})


window.addEventListener("scroll", function() {
  if (window.scrollY > 400 && !document.querySelector(".menu").classList.contains("Open")) {
    gsap.to("nav", { backgroundColor: "" });
  } else {
    gsap.to("nav", { backgroundColor: "" });
  }
})

let prevScrollPos = window.pageYOffset;
window.addEventListener("scroll", function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
   
      gsap.to(nav, { top: "0" });


  } else {
    if(window.scrollY > 400) { 
    gsap.to(nav, { top: "-100px" });
    }
  }
  prevScrollPos = currentScrollPos;
});