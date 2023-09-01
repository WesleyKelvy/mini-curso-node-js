const { error } = require('console')
const fs = require('fs')
const path = require('path')

// criar uma pasta
// fs.mkdir(path.join(__dirname, '/teste'), (error) => {
//     if (error) {
//         return console.log('ERRO: ', error)
//     }

//     console.log('Pasta criada com sucesso!!!')
// })

// criar um arquivo
fs.writeFile(path.join(__dirname, "/teste", '/teste.txt'), 'hello node!', (error) => {
    if (error) {
        console.log('ERRO: ', error)
    }
    console.log('Arquivo criado com sucesso!')

    // Ler aquivio
    fs.readFile(path.join(__dirname, "/teste", "/teste.txt"), 'utf-8', (error, data) => {
        if (error) {
            return console.log("Erro: ", error)
        }
        console.log(data)
    })

    // Adicinar ediçao a um aquivo
    fs.appendFile(path.join(__dirname, '/teste', '/teste.txt'), 'Hello my friend', (error) => {
        if (error) {
            return console.log("Erro: ", error)
        }
        console.log('Arquivo editado com sucesso!')
    })
})


