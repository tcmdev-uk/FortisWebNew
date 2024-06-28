const navbarHTML = `


  <section class="menu hidden overflow-auto  fixed w-full h-full bg-mainOrange z-40 bg-opacity-90 flex justify-center items-center">
        <div class="flex justify-center items-start flex-col relative  w-[80%]"> 
          <div class="flex flex-col"> 
          <a class="text-white sm:text-5xl text-4xl uppercase font-bold whitespace-nowrap menuLink" href="../../../index.html"> Home </a>
          <a class="text-white sm:text-5xl text-4xl uppercase font-bold whitespace-nowrap menuLink" href="../../../Pages/generalPages/about.html"> About </a>
          <a class="text-white sm:text-5xl text-4xl uppercase font-bold whitespace-nowrap menuLink" href="../../../Pages/Blog/hub.html"> Blog </a>
          <a class="text-white sm:text-5xl text-4xl uppercase font-bold whitespace-nowrap menuLink" href="../../../Pages/generalPages/contact.html"> Contact</a>
          <a class="text-white sm:text-5xl text-4xl uppercase font-bold whitespace-nowrap menuLink" href="../../../Pages/Portfolio/ourWork.html"> Our Work </a>
        
 
        </div>
      
        </div>
      
      
      </section>




<nav class="navbarchild border-gray-200d h-auto bg-transparent fixed top-0 w-full z-50">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-10">
  <a href="../../../index.html" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="../../../assets/logo/logo.svg" class="h-6 drop-shadow-2xl fortisLogo" alt="Flowbite Logo" />
     
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center hamburgerButton text-sm text-white rounded-lg  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-mainOrange " aria-controls="navbar-cta" aria-expanded="false">
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
    gsap.to("nav", { backgroundColor: "#121212" });  }

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
    gsap.to("nav", { backgroundColor: "black" });
  } else {
    gsap.to("nav", { backgroundColor: "" });
  }
})