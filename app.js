const express = require('express');
require('dotenv').config()
const hbs = require('hbs');

const app = express();

//HBS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

const port = process.env.PORT;

//Sevir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Home',
        title: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Generic',
        title: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Elements',
        title: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.clear();
    console.log(`Corriendo en el puerto: ${port}`);
});