const { authJwt } = require("../middlewares");
const controller = require("../controllers/groupController");
const { isAdmin } = require("../middlewares/authJwt");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.post("/api/joinGroup", [authJwt.verifyToken], controller.joinGroup);

  app.post("/api/createGroup", [authJwt.verifyToken, /*isAdmin*/], controller.createGroup);

};
