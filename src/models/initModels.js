const Users = require('./users.models')
const Categories = require('./categories.models')
const Posts = require('./posts.models')

const initModels = () => {
    //* has model1.hastOne(model2) model 2 tiene la llave foranea
    //* belongs model2.belongsTo(model1) model 2 tiene la llave foranea

    //? fk = posts
    //? 1 post -> 1 category
    Posts.belongsTo(Categories)
    //? 1 category 1 -> M posts
    Categories.hasMany(Posts)

    //? 1 post -> 1 user
    Posts.belongsTo(Users)
    //? 1 user 1 -> M posts
    Users.hasMany(Posts)

}

/*  
    ?    1 : 1
    *    belongsTo
    *    hasOne

    ?    1 : M
    *    belongsTo
    *    hasMany

    ?    M : M
    *    belongsToMany
    *    hasMany

    ?    2 relaciones 1 : M
    *    belongsTo
    *    hasMany
*/

module.exports = initModels