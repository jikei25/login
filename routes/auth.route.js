const controller = require("../controllers/auth.controller");

module.exports = (app) => {
    app.get("/", controller.loginRender);
    app.get("/signup", controller.signupRender);

    app.post("/", controller.login);
    app.post("/signup", controller.signup);
};