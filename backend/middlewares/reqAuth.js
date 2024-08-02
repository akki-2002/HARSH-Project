
const requireAuth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({error: 'You must be logged in to access this route'})
    }
}