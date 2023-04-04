const express = require('express');
const router = express.Router();
const userDao = require('../database/user.dao');
const jwt = require('../security/jwt');

/**
 * POST: /account/login
 */
router.post('/login', async(req, res)=> {
    const {email, password} = req.body;
    const user = await userDao.validateUserLogin(email, password);
    if(user.length > 0){
        console.log(user);
        //Generate token
        const {id, email, name } = user[0];
        const token = jwt.generateToken({id,email});
        res.send({token, name});
    }else{
        res.send("User not found");
    }
});

module.exports = router;

