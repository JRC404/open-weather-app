const request = require('request'); // npm i request

require('dotenv').config() // https://www.npmjs.com/package/dotenv

const getWeather = () => {
    request({ // https://www.npmjs.com/package/request
        uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`,
        json: true
        // json format if true, raw data if false
    }, (err, res) => {
        if (err) throw err;
        // comment what the error message is...
        /*

        Common fixes: I need to install this, that and the other
        #1 ReferenceError: APP is not defined - APP needs to be APPID or change the const 

        */
        console.log(res.body);
    })
}

getWeather();