const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));


const PORT= process.env.PORT || 3000;
/*** Levanta el servidor ***/
app.listen(PORT, () => console.log(`Server corriendo en el puerto: http://localhost:${PORT}`));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/musica', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/pagea.html'));
});

app.get('/cotizacion', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/pageb.html'));
});

app.get('/horoscopo', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/pagec.html'));
});