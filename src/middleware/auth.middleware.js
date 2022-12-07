//? Middleware para proteger mis rutas

//? Passport tiene diferentes estrategias para manejar logins(bearer, jwt, facebook, google, oath)
const JwtStrategy = require('passport-jwt').Strategy;

//? Extrae el token de los headers de mi peticion
const ExtractJwt = require('passport-jwt').ExtractJwt;

const passport = require('passport') //?libreria

const jwtSecret = require('../../config').api.jwtSecret
const {findUserById} = require('../users/users.controllers')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: jwtSecret
}

passport.use(
    new JwtStrategy(options, async(tokenDecoded, done) => {
    //? done(error, tokenDecoded)
    try {
        const user = await findUserById(tokenDecoded.id)
        if(!user) {
            return done(null, false) //? no existe un error pero tampoco existe el usuario
        }
        return done(null, tokenDecoded) //? No existe un error pero si un usuario
    } catch (error) {
        return done(error, false) //? Si existe un error, pero no un usuario
    }

    })
);



module.exports = passport