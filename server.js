const express = require("express");
const sequelize = require("./config/connection");
const path = require("path");
<<<<<<< HEAD

// const routes = require("./routes");
const Dogs = require('./models/Dogs');
const Owner = require('./models/Owner');
const PotentialOwner = require('./models/PotentialOwner');
=======
const routes = require("./controllers/api/index");

>>>>>>> 3da1777823c64861655ec88e5a2e5c2f701144ff
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