const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Olá Kelvin Souza');
});

app.listen(3001);