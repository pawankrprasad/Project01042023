const { getConnection } = require('./connections');


// get the client




const validateUserLogin = async (email) =>{

    const query = `SELECT id, email, name, password, active FROM user WHERE email = '${email}'`
    const connection = await getConnection();
    const [rows] = await connection.execute(query);
    return rows;
}
getConnection
module.exports = {
    validateUserLogin
}




