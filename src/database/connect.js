const mongoose = require('mongoose')

// const connectToDataBase = async () => {
//     await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}:@cursonodejs.lxgmmsr.mongodb.net/database?retryWrites=true&w=majority`, (error) => {
//         if (error) {
//             console.log('Ocorreu um erro ao conectar ao Banco de Dados: ', error)
//         }
//         console.log('Conexao ao DB feita com sucesso!')
//     }
//     )
// }

const connectToDataBase = async () => {
    // encodeURIComponent: serve para garantir que caracteres especiais ou reservados sejam tratados corretamente.
    const username = encodeURIComponent(process.env.MONGODB_USERNAME);
    const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
    const dbUrl = `mongodb+srv://${username}:${password}@cursonodejs.lxgmmsr.mongodb.net/database?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true, // garante que você esteja usando a forma mais atualizada de analisar URLs de conexão com o banco de dados.
            
            useUnifiedTopology: true, // substitui o mecanismo de monitoramento legado e oferece melhor desempenho
        });
        console.log('Conexao ao DB feita com sucesso!');
    } catch (error) {
        console.error('Ocorreu um erro ao conectar ao Banco de Dados:', error);
    }
};

module.exports = connectToDataBase