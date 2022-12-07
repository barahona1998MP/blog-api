const express = require('express')

const db = require('./utils/databases')
const app = express()
const port = require('../config').api.port
const initModels = require('./models/initModels')

const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')

//? const { port } = require('../config).api

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK'})
})

/* 
app.get('/', passportJWT.authenticate('jwt', {session: false}), (req, res) => {
    res.status(200).json({message: `Bienvenido a nuestra api! ${req.user.user_name}`})
})

*/

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

initModels()

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

