const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const getWeather = require('./lib/getWeather')
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {

    // let data = await getWeather();
    // let temp = data.main.temp;
    res.render('index');
});

app.post('/', async (req, res) => {
    let locationInput = req.body.location;
    let countryCode = req.body.countryCode
    console.log(locationInput);
    

    let data = await getWeather(locationInput, countryCode);
    console.log(data);
    
    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let location = data.name;

    res.render('index', {
        data: {
            location,
            temp,
            humidity
        }
    });
})

app.listen(3000, () => {
    console.log('server listening on port 3000');
    console.log(__dirname);
});