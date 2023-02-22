// Instanciamos Express en app
const express = require("express");
const app = express();
// Usamos la instancia de sequelize que hemos exportado del archivo db.js
const db = require("./db/db");

// Asignamos el puerto para levantar el servidor
const PORT = 3000;

//Parseamos los objetos JSON que se recibirán del body de las peticiones que hagamos
app.use(express.json());

// Mensaje de aviso que estamos conectados al servidor
app.listen(PORT, () => {
    console.log(`Estamos conectados al servidor con el puerto ${PORT}`);

// Pedimos al objeto sequelize de db.js que ejecute su método de autenticación
    db.authenticate()
    .then(() => {
        console.log ("Estamos conectados a la base de datos");
    })
    .catch((error) => {
        console.log (error);
    });
})
