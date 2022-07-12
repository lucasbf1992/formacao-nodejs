const express = require("express"); //importando o express
const app = express(); //iniciando o express

app.get('/', function(req, res) {
    res.send('Bem vindo ao meu site!')
});

app.get('/blog', function(req, res) {
    res.send('Bem vindo ao meu blog!')
});

app.get('/youtube', function(req, res) {
    res.send('Bem vindo ao meu canal!')
});

app.listen(4000, function(error){
    if (error) {
        console.log('Ocorreu algum erro')
    }

    console.log('Servidor iniciado com sucesso!')
})