const UnAuthorize = require("../error/UnAuthorize");

const autorization = (premission) =>{
    return (req, res, next)=>{

        const { permissions } = req.userContext;
        if(permissions.includes(premission)){
            next();
        }else{
            next(new UnAuthorize("Access Denied"))
        } 
    }
}

module.exports = autorization