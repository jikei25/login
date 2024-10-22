const express = require("express");
require('dotenv').config();


const app = express();
const port = process.env.PORT;
const router = require("./routes/auth.route");

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

router(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});