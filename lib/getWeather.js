const request = require('request');
const fetch = require('node-fetch');
const {promisify} = require('util');

require('dotenv').config();

const promisifiedRequest = promisify(request);

const getWeather = async (location, countryCode) => {
    // //------ fetch   -------\\
    // let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location},${countryCode}&units=metric&APPID=${process.env.APPID}`);

    // return await data.json();

    //------ request -------\\
    let data = await promisifiedRequest({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${location},${countryCode}&units=metric&APPID=${process.env.APPID}`,
        json: true,
    });
    return data.body;
};

module.exports = getWeather