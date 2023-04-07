const express = require('express');
const { getProducts, saveProduct } = require('../database/product.dao');

const router = express.Router();


router.get('/', async(req, res)=>{
    const products = await getProducts(); 
    return res.send(products);
})

router.post('/', async(req, res)=> {
    const data = req.body;
    const product = await saveProduct(data); 
    console.log(product)
    return res.send({message:"Product Saved"});
})


module.exports = router;