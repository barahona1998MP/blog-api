const Posts = require('../models/posts.models')
const uuid = require('uuid')
const Categories = require('../models/categories.models')
const Users = require('../models/users.models')

const findAllPosts = async() => {
    const data = await Posts.findAll({
        attributes: {
            exclude: ['categoryId', 'userId']
        },
        include: [ //? include nos permite generar joins
            {
                model: Categories //? Hacemos el primer con categories
            },
            {
                model: Users, //? Otro join con Users
                attributes: { //?Attibutes no permite definir los datos que no queremos mostrar
                    exclude: ['email', 'password', 'role', 'createdAt', 'updatedAt']
                }
            }
        ],
    })
    return data
}

const createPosts = async(obj) => {
    const data = await Posts.create({
        id: uuid.v4(),
        title: obj.title,
        content: obj.content,
        userId: obj.userId,
        coverUrl: obj.coverUrl,
        categoryId: obj.categoryId
    })
    return data
}

module.exports = {
    findAllPosts,
    createPosts
}