const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/index.html'));

app.get('/', (req, res) => { res.sendfile(__dirname + '/public/index.html' )});

app.get('/*', (req, res) => { res.redirect('/') });

module.exports = app;