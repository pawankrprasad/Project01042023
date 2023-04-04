// get the client
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


const validateUserLogin = async (email, password) =>{

    const query = `SELECT id, email, name, active FROM user WHERE email = '${email}' AND password = '${password}'`
    const connection = await getConnection();
    const [rows] = await connection.execute(query);
    return rows;
}

module.exports = {
    validateUserLogin
}




