const express = require('express');
const router = express.Router();
const userDao = require('../database/user.dao');


/**
 * POST: /account/login
 */
router.post('/login', async(req, res)=> {
    const {email, password} = req.body;
    const user = await userDao.validateUserLogin(email, password);
    if(user.length > 0){
        res.send(user[0]);
    }else{
        res.send("User not found");
    }
});


module.exports = router;

