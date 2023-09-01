// const { Person } = require("./person");
// const person = new Person('Wesley');

const dotenv = require('dotenv')
dotenv.config()

const connectToDataBase = require('./src/database/connect')

connectToDataBase()

require('./modules/express')


// console.log(person.sayMyName());
// require ('./modules/fs')
// require ('./modules/http')
// require("./modules/path")







