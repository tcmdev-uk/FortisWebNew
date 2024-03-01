const footerHTML = `<footer class="py-10 px-6 bg-black bg-opacity-90">
<div class="mx-auto max-w-screen-xl">
    <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <a href="https://fortiswebmasters.com" class="flex items-center">
                <img src="../../assets/logo/logo.svg" class="mr-3 h-6" alt="FlowBite Logo" />
               
            </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Resources</h2>
                <ul class=" text-white">
                    <li class="mb-4">
                        <a href="../../index.html" class="hover:underline"> Home </a> 
                    </li>
                    <li>
            
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Follow us</h2>
                <ul class=" text-white">
                    <li class="mb-4">
                        <a href="https://www.facebook.com/fortiswebmasters/" target="_blank" class="hover:underline ">Facebook</a>
                    </li>
                    <li>
                    
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Legal</h2>
                <ul class=" text-white">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm  sm:text-center text-gray-400">© 2024 <a href="https://fortiswebmasters.com" class="hover:underline">Fortis Webmasters</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/fortiswebmasters/" target="_blank" class="text-gray-500 hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
            </a>
          
         
           
        </div>
    </div>
</div>
</footer>`;

let footerQuery = document.querySelector("#footer");
footerQuery.innerHTML = footerHTML;
