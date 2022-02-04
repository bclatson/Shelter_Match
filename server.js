const express = require("express");
const sequelize = require("./config/connection");
const path = require("path");

// const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;
// app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api", routes);

sequelize.sync({ force: true }).then(() =>{
    app.listen(PORT, () => {
        console.log(`It works ${PORT}`);
    });
});