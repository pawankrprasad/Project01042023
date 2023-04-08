const JWT = require('jsonwebtoken');

const SECRET = "jflkdjslfkdsoiu23o4isdnf2384uodnflskajrskljj34i5udfnsdlfksdjfasoifh34p98nfksdjfhsijfaf";


const generateToken = (payload) =>{
  return JWT.sign(payload, SECRET);
}

const verifyToken = (token) =>{
 return JWT.verify(token, SECRET);
}

module.exports = {
    generateToken,
    verifyToken
}