const User = require('../models/UserModel')
const jsonwebtoken = require('jsonwebtoken')

const createToken = (id)=>{
    const token = jsonwebtoken.sign({id}, process.env.SECRET, {expiresIn: '1h'})
    return token;
}

const signupUser = async(req, res) =>{
    const {username, email, password, userType} = req.body

    try{
        const user = await User.signup(username, email, password, userType);
        const token = createToken(user._id)
        res.json({user, token})

    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const loginUser = async(req, res) =>{
    const {email, password} = req.body
    try{
        const user = await User.login(email, password);
        const token = createToken(user._id)
        res.json({user, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const getUsers = async(req, res) =>{
    const users = await User.find({}).sort({createdAt: -1})
     res.status(200).json({users})
}

module.exports = {
    signupUser,
    loginUser,
    getUsers
}