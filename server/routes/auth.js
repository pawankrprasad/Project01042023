const express = require('express');
const router = express.Router();
const userDao = require('../database/user.dao');
const jwt = require('../security/jwt');
const bcrypt = require('bcrypt');
const UnAuthorize = require('../error/UnAuthorize');

/**
 * POST: /account/login
 */
router.post('/login', async(req, res, next)=> {
    const {email, password} = req.body;
    const user = await userDao.validateUserLogin(email);
    if(user.length > 0){
       const isPasswordValid = await bcrypt.compare(password, user[0].password);
        if(isPasswordValid){
            const {id, email, name } = user[0];
            const token = jwt.generateToken({id,email, permissions: ['product.read','product.write']});
            res.send({token, name});
        }else{
            next(new UnAuthorize("User name or password is invalid."))
        }
        
    }else{
        next(new UnAuthorize("User name or password is invalid."))
    }
});

module.exports = router;

