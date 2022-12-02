const express = require('express')

const userRouter = require('./users/users.router')
const db = require('./utils/databases')

const app = express()
const port = require('../config').api.port
//? const { port } = require('../config).api

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK'})
})

db.authenticate()
    .then(() => {
        console.log('Databases Authenticated"')
    })
    .catch(err => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Database Synced')
    })
    .catch(err => {
        console.log(err)
    })
    
app.use('/api/v1/users', userRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

