const jwt = require("jsonwebtoken");

module.exports = (req,res,next) => {
    const authToken = req.headers.authorization;

    if(!authToken) {
        return res.status(400).json({Token: "Token is missing"});
    }


    //Bearer token -> saj32h32j9aj21j1oj021 Estou fazendo uma desutruração
    const [, token] = authToken.split(" ");

    try {
        jwt.verify(token, "45ce84c4-f719-4b74-8c66-876ec85107ae");
        return next();
    }catch(error) {
        return res.status(401).json({
            token: "Token Inválido"
        })
    }       
   
}