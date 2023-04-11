const express = require('express');
const { getProducts, saveProduct, getProduct } = require('../database/product.dao');
const authorization = require('../middleware/authorization');

const router = express.Router();


router.get('/', authorization('product.read'),  async(req, res)=>{
    const products = await getProducts(); 
    return res.send(products);
})

//product/7
router.get('/:id', authorization('product.read'), async(req, res)=>{
    const {id} = req.params;
    const product = await getProduct(id); 
    if(product.length > 0) {
        return res.send(product[0]);
    }
    return res.send({})
})

router.post('/', authorization('product.write'), async(req, res)=> {
    const data = req.body;
    const product = await saveProduct(data); 
    console.log(product)
    return res.send({message:"Product Saved"});
})


module.exports = router;