// Instanciamos Express en app
const express = require("express");
const app = express();

// Asignamos el puerto para levantar el servidor
const PORT = 3000;

//Parseamos los objetos JSON que se recibirán del body de las peticiones que hagamos
app.use(express.json());

// Mensaje de aviso que estamos conectados 
app.listen(PORT, () => {
    console.log("Estoy conectado");
})

