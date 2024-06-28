const contactHTML = `<section class="relative contactWrapper  overflow-hidden bg-mainOrange py-24">
    <img src="../../../assets/GeneralIcons/Castle.svg" alt="" class="absolute right-0 opacity-50 bottom-[-40px] md:w-[400px] w-[250px]">
<div class="absolute top-0 left-0 -translate-x-48 -translate-y-36">
   
</div>



<div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="">
        <h2 class="text-3xl font-bold font-poppins uppercase text-white sm:text-4xl lg:text-5xl xl:text-6xl"> Lets build your trade business </h2>
        <p class="mt-1 text-base font-normal text-gray-100 sm:text-lg">We'd love a chat!</p>
    </div>

    <div class="grid grid-cols-1 mt-12 sm:mt-16 lg:mt-20 lg:grid-cols-6 lg:gap-x-24 gap-y-12">
        <div class="space-y-8 lg:space-y-12 lg:col-span-2 lg:order-last">
            

            <div>
                <h3 class="text-xl font-normal text-white sm:text-2xl">
                    <a href="#" title="" class="text-[1.2rem]"> info@fortiswebmasters.com</a>
                </h3>
                <p class="mt-1 text-base font-normal text-gray-100">Email us directly if you have any question or queries? </p>
            </div>
        </div>

        <div class="lg:col-span-4">
            <form action="https://submit-form.com/b8PC4Vzr8" method="POST" class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                    <label for="" class="text-base font-normal text-white"> Your name </label>
                    <div class="mt-2">
                        <input type="text" name="Your name" id="" placeholder="Enter your full name" class="block w-full px-5 py-4 text-base font-normal text-black placeholder-gray-500 bg-white border border-gray-400 rounded-md focus:border-white focus:ring-white focus:ring-1" />
                    </div>
                </div>

                <div>
                    <label for="" class="text-base font-normal text-white"> Your email </label>
                    <div class="mt-2">
                        <input type="email" name="Your Email" id="" placeholder="Enter your email address" class="block w-full px-5 py-4 text-base font-normal text-black placeholder-gray-500 bg-white border border-gray-400 rounded-md focus:border-white focus:ring-white focus:ring-1" />
                    </div>
                </div>

                <div class="sm:col-span-2">
                    <label for="" class="text-base font-normal text-white"> What type of trade business are you? </label>
                    <div class="mt-2">
                        <select name="Options" id="" class="block w-full py-4 pl-5 pr-10 text-base font-normal text-black placeholder-gray-500 bg-white border border-gray-400 rounded-md focus:border-white focus:ring-white focus:ring-1">
                            <option value=""> Type of trade </option>
                            <option value="">Electrician  </option>
                            <option value=""> Plumber </option>
                            <option value=""> Landscaper </option>
                            <option value=""> Roofing </option>
                            <option value=""> Home improvement </option>
                            <option value=""> Carpentery </option>
                            <option value=""> Other </option>
                        </select>
                    </div>
                </div>

                

                
                  


                <div class="sm:col-span-2">
                    <label for="" class="text-base font-normal text-white"> What are you looking for? </label>
                    <div class="mt-2">
                        <textarea name="" id="" placeholder="Submit here" rows="4" class="block w-full px-5 py-4 text-base font-normal text-black placeholder-gray-500 bg-white border border-gray-400 rounded-md resize-y focus:border-white focus:ring-white focus:ring-1"></textarea>
                    </div>
                </div>

                <div class="sm:col-span-2">
                    <button type="submit" class= "inline-flex
                    items-center
                    justify-center
                    px-10
                    py-2
                    font-sans
                    text-base
                    font-semibold
                    leading-6
                    transition-all
                    duration-200
                    border-2 border-transparent
                    rounded-full
                    sm:leading-8
                    bg-gray-800
                    sm:text-lg
                    text-white
                    hover:bg-opacity-90
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary ">Send Message</button>
                </div>
            </form>
        </div>
    </div>
</div>
</section>`;

let contactQuery = document.querySelector("#contactUs");
contactQuery.innerHTML = contactHTML
