const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

module.exports = {
    async createUsers(req, res) {
        try {
            const { name, username, email, password } = req.body;

            const user = await User.create({ name, username, email, password });
            return res.status(200).json({ User: user });
        } catch (errors) {
            return res.status(400).json({ Erro: errors })
        }

    },
    async authenticate(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email: email
            }
        });
        if(!user) {
            return res.status(400).json({User: "User or password incorrect"});
        }

        const passwordCompare = await bcryptjs.compare(password, user.password);

        if(!passwordCompare) {
            return res.status(400).json({User: "User or password incorrect"})
        }

        const token = await jsonwebtoken.sign({}, "45ce84c4-f719-4b74-8c66-876ec85107ae", {
            expiresIn: "20s"
        });

        return res.status(200).json({Token: token});

    }
}
