// Instanciamos un objeto a partir de la clase Sequelize
const { Sequelize } = require("sequelize");

// Usamos las credenciales que hemos almacenado en nuestro archivo config
const config = require ("../config/config.json");

// require("dotenv").config();

// Instanciamos un objeto sequelize de la clase Sequelize y pasamos parametros de la BBDD
const sequelize = new Sequelize (
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        port: config.development.port,
        dialect: config.development.dialect,
    }
);

// Exportamos el objeto instanciado para usarlo en nuestro index.js
module.exports = sequelize;