const UnAuthorize = require('../error/UnAuthorize');
const { verifyToken } = require('../security/jwt')

const authentication = (req, res, next) => {

    try{
        const { authorization } = req.headers;
        if(authorization){
            const [, token] = authorization.split(" ");
            verifyToken(token);
            next();
        }else{
            next(new UnAuthorize("Authorization token in missing in request header."));
        }
    }catch(error){
        next(new UnAuthorize("Invalid Token"));
    }
    
    
}

module.exports = {
    authentication
}