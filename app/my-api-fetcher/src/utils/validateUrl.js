const { URL } = require('url');

function validateUrl(url) {
    try {
        const parsedUrl = new URL(url);
        if (['http:', 'https:'].includes(parsedUrl.protocol)) {
            return parsedUrl.toString();
        } else {
            throw new Error('Invalid URL protocol. Only HTTP/HTTPS are allowed.');
        }
    } catch (error) {
        throw new Error(`Invalid URL: ${error.message}`);
    }
}

module.exports = validateUrl;