// Assuming your JSON file is named 'data.json' and located in the same directory as your HTML file

// Fetch the JSON file
fetch('content.json')
    .then(response => response.json())
    .then(jsonData => {
        jsonData.forEach(item => {
            const title = item.heading.text;
            const image = item.image.src;
            const date = item.date.text;
            const link = item.pageLink.href
            const catagory = item.catagory.text

            console.log(jsonData)

            const blogItemHtml = `<div class="overflow-hidden relative bg-white rounded shadow cursor-pointer hover:scale-102 transition-all blogItem">
                <a class="absolute w-full h-full z-10 cursor-pointer" href="${link}"> </a>
                    <div class="p-5">
                        <div class="relative">
                            <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                <img class="object-cover w-full h-full" src="${image}" alt="" />
                            </a>
    
                            <div class="absolute top-4 left-4">
                                <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> ${catagory} </span>
                            </div>
                        </div>
                        <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> ${date} </span>
                        <p class="mt-5 text-2xl font-semibold">
                            <a href="#" title="" class="text-black"> ${title} </a>
                        </p>
                        <a href="#" title="" class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-mainOrange transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                            Continue Reading
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>`;

            $(".blogWrapper").append(blogItemHtml);
        });
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });
