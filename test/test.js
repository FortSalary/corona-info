const covid = require('../index');

async function consoleWrite() {
    let res = await covid.findData({ country: "all" });
    console.log(res)
}

async function countryWrite() {
    let res = await covid.findData({ country: "USA"})
    console.log(res)
}



 consoleWrite();

countryWrite();
