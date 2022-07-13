const express = require("express"); //importando o express
const app = express(); //iniciando o express

app.get('/', function(req, res) {
    res.send('Bem vindo ao meu site!')
});

app.get('/blog/:artigo?', function(req, res) {
    var artigo = req.params.artigo;

    if (artigo) {
        res.send("<h2>Artigo: " + artigo + " </h2>")
        return
    }

    res.send('Bem vindo ao meu blog!')
});

app.get('/youtube', function(req, res) {

    var canal = req.query["canal"];

    if (canal) {
        res.send('Bem vindo ao meu canal! ' + canal)
        
        return
    }

    res.send('Bem vindo ao meu canal!')
});

app.get('/ola/:nome/:empresa', function(req, res) {
    //REQ => DADOS ENVIADOS PELO USUARIO
    //RES => REPOSTA QUE VAI SER ENVIADO AO USUARIO

    var nome = req.params.nome;
    var empresa = req.params.empresa;

    res.send("<h1>Oi " + nome + " da empresa: " + empresa + " </h1>");
});

app.listen(4000, function(error){
    if (error) {
        console.log('Ocorreu algum erro')
    }

    console.log('Servidor iniciado com sucesso!')
})