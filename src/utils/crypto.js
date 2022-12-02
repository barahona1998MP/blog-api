const bcryot = require('bcrypt')

const hashPassword = (plainPassword) => {
    //? PlanPassword = contraseña en texto plano 
    return bcryot.hashSync(plainPassword, 10)
}

/* console.log(hashPassword('root')) */

const comparePassword = (plainPassword, hashPassword) => {
    return bcryot.compareSync(plainPassword, hashPassword)
}


/* console.log(comparePassword('root', '$2b$10$vFgY9lLCuHYDoRsptEnA4e.S5D3g.09s3XECSbFWKmkR5FJf.5fyi')) */

module.exports = {
    hashPassword,
    comparePassword
}