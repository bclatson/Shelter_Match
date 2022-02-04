const express = require("express");
const sequelize = require("./config/connection");
const path = require("path");
const routes = require("./controllers/api/index");

const app = express();

const PORT = process.env.PORT || 3001;
// app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'piblic')));
app.use(routes);

sequelize.sync({ force: false }).then(() =>{
    app.listen(PORT, () => {
        console.log(`It works ${PORT}`);
    });
});