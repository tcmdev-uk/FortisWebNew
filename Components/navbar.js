const navbarHTML = `<nav class="navbarchild border-gray-200d h-auto bg-transparent fixed top-0 w-full z-50">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-10">
  <a href="../../index.html" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="../../assets/logo/logo.svg" class="h-6" alt="Flowbite Logo" />
     
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button onclick="window.location.href = '../../Pages/contactus/contactUs.html'"type="button" class="text-white bg-mainOrange hover:bg-darkOrange hidden md:block focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center  focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border bg-darkAlt md:bg-transparent rounded-lg text-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0    border-gray-700">
      <li>
        <a href="../../index.html" class="block py-2 px-3 md:p-0 text-white  rounded md:bg-transparent  aria-current="page">Home</a>
      </li>
      <li>
        <a href="../../index.html#Projects" class="block py-2 px-3 md:p-0 rounded md:text-white   md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Projects</a>
      </li>
      <li>
        <a href="../../index.html#Services" class="block py-2 px-3 md:p-0 rounded md:text-white   hover:text-blue-500 text-white hover:bg-gray-700 md:hover:bg-transparent border-gray-700">Services</a>
      </li>
      <li class="bg-mainOrange md:bg-transparent">
        <a href="../../Pages/contactus/contactUs.html" class="block py-2 px-3 md:p-0 rounded md:text-white   md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Contact</a>
      </li>
    </ul>
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
