
const mysql = require('mysql2/promise');


const getConnection = async() =>{
    // create the connection to database
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: "root",
        database: 'dbtest'
    });
    return connection;
}

module.exports = {
    getConnection
}