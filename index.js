import Crud from './code.js'

//Seleção todos 
crud .selectALL(function(autor){
    for(let i = 0 ; autor.lenght > i; i++){
        console.log("O id é:" + autor[i].id+":" + "o nome é: " + autor[i].nome)
    }
})

