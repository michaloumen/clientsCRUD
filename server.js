require('./models/db');

const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const expressHandlebars = require('express-handlebars');

const clientController = require('./controller/clientController');

const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

app.set('views',path.join(__dirname,'/views/'))

app.engine('hbs',expressHandlebars({
    extname:'hbs',
    defaultLayout:'mainLayout',
    layoutsDir:__dirname + '/views/layouts/'
}))

app.set('view engine','hbs');

app.listen(5000,() => {
    console.log("Server is listening on http://localhost:5000/client");
})

app.use('/client',clientController);