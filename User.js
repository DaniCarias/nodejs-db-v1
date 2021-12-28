const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', { //const para trabalhar com os usuarios 
    id:{ //dentro da tabela 'users' cria os campos:
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    }, 
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//User.sync();                //cria a tabela USERS
//User.sync({alter: true});   //Se se mudar algum campo aqui tmb muda na Base de Dados

module.exports = User;