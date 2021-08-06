const app = require("./app");

const PORT = process.env.PORT || 3000;

require('./database/index');

app.listen(PORT, () => {
    console.log("Servidor Funcionando");
});
