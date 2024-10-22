const collection = require("../mongodb");

module.exports.loginRender = (req, res) => {
    res.render("login");
};

module.exports.signupRender = (req, res) => {
    res.render("signup");
};

module.exports.login = async (req, res) => {
    const user = await collection.findOne({username:req.body.username});
    if (!user) {
        res.send("User does not exist");
    } else {
        if (user.password === req.body.password) {
            res.render("home");
        } else {
            res.send("Wrong password");
        }
    }
};

module.exports.signup = async (req, res) => {
    const data = new collection({
        username: req.body.username,
        password: req.body.password
    });

    await data.save();
    res.render("home");
};
