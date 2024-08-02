const express = require('express');
const {signupUser, loginUser, getUsers,getUserById, updateUser, deleteUser, addToCart, removeFromCart} = require('../controllers/userController')
const requireAuth = require('../middlewares/requireAuth')

const router = express.Router();

router.post('/signup', signupUser);

router.post('/login', loginUser);

router.get('/getusers',requireAuth('Admin'), getUsers);

router.get('/getuserbyid/:id',requireAuth('Admin'), getUserById);

router.put('/updateuser/:id', updateUser)

router.delete('/deleteuser/:id',requireAuth('Admin'), deleteUser)

router.post('/addtocart/:userId', requireAuth('User'), addToCart)

router.delete('/removefromcart/:userId', requireAuth('User'), removeFromCart)

module.exports = router;
