const path = require("path")

// Apenas o nome do aquivo atual
console.log(path.basename(__filename))

//  Nome do Diretorio Atual
console.log(path.basename(__filename))

// Extençao do arquivo
console.log(path.extname(__filename))

// criar objeto path
console.log(path.parse(__filename))

// Juntar caminhos de arquivos
console.log(path.join(__dirname, 'teste', 'teste.html'))