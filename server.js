const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

// Crear un MiddleWare
app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'daniel'
    });
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/data', (req, res) => {
    res.send('Hola Data');
})

app.listen(port, () => {
    console.log(`Escuchando Peticiones en el puerto ${port}`);
});