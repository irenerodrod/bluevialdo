const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Middleware para servir archivos estáticos desde la carpeta raíz
app.use(express.static(path.join(__dirname)));

// Ruta para el archivo index.html (página principal)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rutas para las páginas secundarias
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/artists', (req, res) => {
    res.sendFile(path.join(__dirname, 'artists.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});