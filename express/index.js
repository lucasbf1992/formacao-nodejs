const express = require("express"); //importando o express
const app = express(); //iniciando o express

app.listen(4000, function(error){
    if (error) {
        console.log('Ocorreu algum erro')
    }

    console.log('Servidor iniciado com sucesso!')
})