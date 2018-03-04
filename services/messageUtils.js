const faker = require('faker');

let devices = [...Array(10)].map(() => faker.commerce.product());

function createMessage(){
    let capacity = Math.floor(Math.random() * 30);
    return {
        type: 'shelf-stat',
        device: devices[Math.floor(Math.random() * devices.length)],
        date: faker.date.past(),
        capacity,
        packageDepth: Math.floor(Math.random() * 300) / 10,
        onShelf: Math.floor(Math.random() * capacity)
    };
};

module.exports = {
    createMessage
};
