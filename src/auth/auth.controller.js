//? email
//? password
const {findUserByEmail} = require('../users/users.controllers')
const {comparePassword} = require('../utils/crypto')
//? valida si los datos pertenecen a un usuario
const checkUserCredential = async (email, password) => {
    try {
        const user = await findUserByEmail(email)
        const verifyPassword = comparePassword(password, user.password)
        if(verifyPassword) {
            return user
        }
        return null
    } catch (error) {
        return null
    }
}

checkUserCredential('marcos@gmail.com', 'root')
    .then((data) => {
        console.log(data)
    })
    .catch(err => console.log(err))