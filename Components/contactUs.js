const contactHTML = ` <section class="bg-dark py-14">
<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2 class=" text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl"> Get in touch with us today! </p>
    <form id="ContactUs" action="https://formsubmit.co/69583632d9470d12c84f3225ccad3466" method="post" class="space-y-8">
        <div>
            <label for="email" class="block mb-2 text-sm font-medium  text-gray-300">Your email</label>
            <input name="email" type="email" id="email" class="  text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-gray-700  placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="email@address.com" required>
        </div>
        <div>
            <label for="subject" class="block mb-2 text-sm font-medium  text-gray-300">Subject</label>
            <input name="subject" type="text" id="subject" class="block p-3 w-full text-sm t  rounded-lg border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let us know how we can help you" required>
        </div>
        <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium  text-gray-400">Your message</label>
            <textarea name="content" id="message" rows="6" class="block p-2.5 w-full text-sm  rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
        </div>
        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-mainOrange sm:w-fit hover:bg-darkOrange focus:ring-4 focus:outline-none focus:ring-primary-300 hover:bg-primary-700 focus:ring-primary-800">Send message</button>
    </form>
</div>
</section>`;

let contactQuery = document.querySelector("#contactUs");
contactQuery.innerHTML = contactHTML
