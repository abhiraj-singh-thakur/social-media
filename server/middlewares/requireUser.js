const {error} = require('../utils/responseWrapper');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
    if (!req.headers || !req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
        return res.send(error(401, 'Authorization header is missing or invalid'));
    }
    const accessToken = req.headers.authorization.split(' ')[1];
    console.log(`access token from middleware: ${accessToken}`);

    try {
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY);
        req._id = decoded._id;
        const user = await User.findById(req._id);
        if(!user){
            return res.send(error(404, 'User not found'));
        }
        next();
    }catch (e) {
        console.log(e);
        return res.send(error(500, "Internal server error"));
    }
}