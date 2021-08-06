const { Model, DataTypes } = require("sequelize")

const bcrypt = require("bcryptjs");

class User extends Model {
    static  init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Nome é um campo obrigatório"
                    }
                }
            },
            username: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Username é um campo obrigatório"
                    }
                }
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Email é um campo obrigatório"
                    }
                }
            },
            password: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Password é um campo obrigatório"
                    }
                }
            }
        },{
            sequelize,
            tableName: "users",
            hooks: {
                beforeSave(user) {
                    user.password = bcrypt.hashSync(user.password, 10);
                },

            }
        })
    }
    
}
module.exports = User;