const { getConnection } = require('./connections');


const getProducts = async () =>{
    const query = `SELECT * from product`
    const connection = await getConnection();
    const [rows] = await connection.execute(query);
    return rows;
}


const getProduct = async (id) =>{
    const query = `SELECT * from product where id=${id}`;
    const connection = await getConnection();
    const [rows] = await connection.execute(query);
    return rows;
}

const saveProduct = async (product) =>{
    const query = `INSERT INTO product (name, brand, description, price, qty) 
    VALUES ('${product.name}', '${product.brand}', '${product.description}', '${product.price}', '${product.qty}' );`
    const connection = await getConnection();
    const [rows] = await connection.execute(query);
    return rows;
}

module.exports = {
    getProducts,
    saveProduct,
    getProduct
}
