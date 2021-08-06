module.exports = {

    host: 'localhost',
    database: process.env.NODE_ENV === 'test' ? 'test_refresh_token' : 'login_refresh_token',
    username: 'root',
    password: '',
    dialect: 'mysql',
    define: {
        timestamps: true,
    }

}