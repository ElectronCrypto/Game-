const validateUrl = require('./utils/validateUrl');
const getData = require('./services/apiService');
const displayData = require('./display/displayData');

async function main() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const validatedUrl = validateUrl(url);
        const data = await getData(validatedUrl);
        displayData(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();