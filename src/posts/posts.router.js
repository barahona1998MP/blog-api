const router = require('express').Router()

const postsServices = require('./posts.services')
const passportJWT = require('../middleware/auth.middleware')

router.route('/')
    .get(postsServices.getAllPosts)
    .post(passportJWT.authenticate('jwt', {session: false}), postsServices.createNewPost)

module.exports = router