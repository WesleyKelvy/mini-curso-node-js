const express = require('express')
const UserModel = require('../src/models/user.model')

const app = express()
// Colocanco HTML dinamico com src/views/****.ejs
app.set('view engine', 'ejs')
app.set('views', 'src/views')
app.get('/views/users', async (req, res) => {
    const users = await UserModel.find({})

    res.render('index', { users })
})

// middlewares = iniciam antes das chamadas das req
app.use(express.json())

app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`)
    console.log(`Content  Type: ${req.headers["content-type"]}`)
    console.log(`Date: ${new Date()}`)

    next()
})


// Aqui vai estar os endpoints

// Pegar todos Users
app.get('/users', async (req, res) => {
    try {
        // const users = [{
        //     name: 'John Doe',
        //     email: 'john@doe.com'
        // },
        // {
        //     name: 'Jane Doe',
        //     email: 'jane@doe.com'
        // }];
        const users = await UserModel.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500)
    }
})
// Pegar Users por ID
app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id

        const user = await UserModel.findById(id)

        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Criar Users
app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//  ATUALIZAR VALORES DO USER
app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })

        res.status(200).json(user)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Deletar User
app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndRemove(id)

        res.status(200).json(user)

    } catch (error) {
        res.status(500).send(error.message)
    }
})


// declarar porta do server
const port = 8080
// Iniciar server
app.listen(port, () => console.log(`Rodando na porta ${port}!`))
