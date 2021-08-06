const Sequelize = require('sequelize');
const DB = require("../config/database");

const connection = new Sequelize(DB);
const User = require('../models/User');

User.init(connection);

try {
    connection.authenticate();
    console.log('Banco de dados conectado');
}catch(error) {
    console.log('Erro ao conectar no banco de dados');
}

module.exports = connection;