const express = require('express'); //ir buscar o package
const res = require('express/lib/response');
const app = express(); //criar uma cost e igualar ao express
const User = require('./models/User'); //ligacao ao ficheiro User - qbd é para mexer com os users, usa-se
//a const User

app.use(express.json()); //fazer para poder receber os dados em formato json, usa se no "console.log(req.body);"

app.get('/', async(req, res) => {
    res.send("Pagina Inicial! -");
});

app.post('/login', async(req, res) => {

    console.log(req.body); //mostrar os dados q foram recebidos

    await User.create(req.body) //o programa pára aqui ate q seja criado um novo user - //"req.body" = campos 
    //da tabela user
    .then(() => { //assr de ser criado um novo user
        return res.json({ //return = o que vai aaprecer no utilizador
            erro: false,   //Nao ha erro 
            mensagem: "Usuario fez login com sucesso"
        });
    }).catch(() => {
        return res.status(400).json({ //status 400 = bad Request
            erro: true,   //Ha erro 
            mensagem: "Usuario nao fez login com sucesso"
        })
    });

    //res.send("Pagina Login");
});

app.listen(8080, () => { //ligar ao nodejs  -> escrever no terminar nodemon "nomedoproj.js"
    console.log("Ligacao efetuada com sucesso!"); 
});