//------------------------ SERVE PARA FAZER A CONEXÃO A BASE DE DADOS ------------------------

const Sequelize = require('sequelize');
const conect = new Sequelize("teste_bd_nodejs", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
});

conect.authenticate()
.then(function(){
    console.log("Conexao com bd com sucesso!");
}).catch(function(){
    console.log("Erro de conexao");
});

module.exports = conect;
