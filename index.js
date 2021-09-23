const jwt = require('jsonwebtoken');
const SECRET = "6chr0jOTMF7PazDdsdH4BMyhEXpiy9"

const token = jwt.sign({idUser: 1}, SECRET, {expiresIn: 10000})

console.log(token) 