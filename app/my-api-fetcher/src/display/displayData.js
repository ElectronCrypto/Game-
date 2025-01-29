function displayData(data) {
    if (!data || !Array.isArray(data)) {
        console.log('No data received or data is not in the expected format.');
        return;
    }

    console.log('Data received:');
    for (let item of data) {
        if (item && item.id && item.name) {
            console.log(`ID: ${item.id}, Name: ${item.name}`);
        } else {
            console.log('Invalid data item:', item);
        }
    }
}

module.exports = displayData;