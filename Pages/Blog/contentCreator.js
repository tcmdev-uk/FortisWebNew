const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const contentFolder = path.join(__dirname, 'Content');
const contentFilePath = path.join(__dirname, 'content.json');

// Function to process the content
const processContent = () => {
    const files = fs.readdirSync(contentFolder);
    const contentArray = [];

    files.forEach(file => {
        if (path.extname(file) === '.html') {
            const filePath = path.join(contentFolder, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');

            const $ = cheerio.load(fileContent);

            // Extract image, heading, date, and page link from fileContent
            const image = $('.headPic').attr('src');
            const heading = $('.TITLE').text();
            const date = $('.DATE').text();
            const catagory = $('.catagory').text();
            const pageLink = `./content/${file}`; // Assuming the page link is the same as the file name


            // Store them in an object
            const content = {
                image: {
                    src: image
                },
                heading: {
                    text: heading
                },
                date: {
                    text: date
                },
                pageLink: {
                    href: pageLink
                },
                catagory: {
                    text: catagory
                }
            };

            // Add the object to the array
            contentArray.push(content);
        }
    });

    const jsonContent = JSON.stringify(contentArray);
    fs.writeFileSync(contentFilePath, jsonContent);
    console.log('Content JSON file created successfully.');
};

// Initial processing of content
processContent();

// Watch for changes in the content folder
fs.watch(contentFolder, (eventType, filename) => {
    if (eventType === 'change') {
        console.log(`File ${filename} changed. Updating content...`);
        processContent();
    }
});

