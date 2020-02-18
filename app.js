const request = require('request');
const {promisify} = require('util');
const fs = require('fs');
// make it look like json format.

require('dotenv').config() // https://www.npmjs.com/package/dotenv


const promisifiedRequest = promisify(request);

const getWeather = async () => {
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`,
        json: true
    })
    fs.writeFileSync('weather.json', data.body);
    // console.log(data.body.weather[0].description)
    console.log(data.body)
}

getWeather();