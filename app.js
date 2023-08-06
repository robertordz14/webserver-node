const express = require('express')
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const hbs = require('hbs');

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


// Servivir contenido estatico
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Roberto',
    titulo: 'Curso de node'
  })
});

app.get('/hola-mundo', (req, res) => {
  res.send('Hello World')
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Roberto',
    titulo: 'Curso de node'
  })});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Roberto',
    titulo: 'Curso de node'
  })});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

