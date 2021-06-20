const covid = require('../index');

async function consoleWrite() {
    let res = await covid.getAll()
    console.log(res)
}

async function countryWrite() {
    let res = await covid.getCountry("USA")
    console.log(res)
}



consoleWrite();

countryWrite();
