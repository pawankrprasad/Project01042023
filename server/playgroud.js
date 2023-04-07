const bcrypt = require('bcrypt');




bcrypt.hash('123456', 4).then(hash => console.log(hash))