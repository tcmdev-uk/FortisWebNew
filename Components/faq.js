const faqHTML = `<section class="py-20 bg-mainOrange">
<div class="w-full mx-auto px-[5%]">
    <h2 class="text-3xl font-bold leading-tight text-white 
sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>

    <div class="flow-root mt-12 sm:mt-16">
        <div class="divide-y divide-gray--200 -my-9">
            <div class="py-9">
                <p class="text-xl font-semibold text-white
">How long does it take to build a website for my trade business? </p>
                <p class="mt-3 text-base text-white">The timeline for building a website can vary based on factors such as the complexity of your requirements and the amount of content needed. Typically, we aim to complete the initial development within 2 Weeks, with additional time for revisions and customization based on your trade-specific needs.</p>
            </div>

            <div class="py-9">
                <p class="text-xl font-semibold text-white
">What essential features should I include on my trade service website to attract clients?</p>
                <p class="mt-3 text-base text-white">To effectively market your trade services online, it's crucial to include features such as clear contact information and a prominent call-to-action (CTA) for inquiries, a gallery showcasing your completed projects and craftsmanship, testimonials from satisfied clients highlighting your reliability and skill, a services page detailing the range of trades you specialize in, and a blog or resources section offering helpful tips and insights related to your trade.</p>
            </div>

            <div class="py-9">
                <p class="text-xl font-semibold text-white
">How can I gauge the effectiveness of my trade service website's marketing efforts?</p>
                <p class="mt-3 text-base text-white">Evaluating the success of your website's marketing efforts can be done through various methods tailored to your trade, such as monitoring website traffic to see the number of visitors converting into inquiries or leads, analyzing the performance of specific project pages or service listings, tracking keyword rankings relevant to your trade on search engines, and measuring engagement on social media platforms where you showcase your work and services.</p>
            </div>

            <div class="py-9">
                <p class="text-xl font-semibold text-white
">What ongoing maintenance tasks are necessary to ensure my trade service website remains effective?</p>
                <p class="mt-3 text-base text-white">
                  Maintaining your trade service website involves tasks such as regularly updating project galleries and service listings to feature your latest work and offerings, ensuring that contact forms and communication channels are functioning smoothly for client inquiries, performing routine security updates and data backups to safeguard client information, monitoring website performance and loading speed to provide a seamless user experience, and staying informed about industry trends and SEO strategies to uphold your online visibility and competitiveness in the trade market.
                </p>
            </div>
        </div>
    </div>
</div>
</section>`;

let faqQuery = document.querySelector("#faq");
faqQuery.innerHTML = faqHTML;
