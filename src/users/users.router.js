const router = require('express').Router()
const passportJWT = require('../middleware/auth.middleware')

const userServices = require('./users.services')

/* router.get('/', passportJWT.authenticate('jwt', {session: false}), userServices.getAllUsers)
router.post('/', userServices.postUser)
 */
router.route('/')
    .get(passportJWT.authenticate('jwt', {session: false}), userServices.getAllUsers)
    .post(userServices.postUser)

/* router.get('/me', passportJWT.authenticate('jwt', {session: false}) ,userServices.getMyUser)
router.patch('/me', passportJWT.authenticate('jwt', {session: false}),userServices.patchMyUser)
router.delete('/me', passportJWT.authenticate('jwt', {session: false}), userServices.deleteMyUser) */
router.route('/me')
    .get(passportJWT.authenticate('jwt', {session: false}) ,userServices.getMyUser)
    .patch(passportJWT.authenticate('jwt', {session: false}),userServices.patchMyUser)
    .delete(passportJWT.authenticate('jwt', {session: false}), userServices.deleteMyUser)

router.get('/:id', userServices.getUserById)
router.patch('/:id', userServices.patchUser)
router.delete('/:id', userServices.deleteUser)


module.exports = router