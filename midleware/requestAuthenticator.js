var jwt = require("jsonwebtoken");
var config = require("../config");

module.exports = (req, res, next) => {
  if (!req.headers["tourinc-auth"]) {
    // res.status(401).send("Unauthorized");
    res.status(401).json({
      message: "Unauthorized"
    });
  } else {
    jwt.verify(req.headers["tourinc-auth"], config.secret, (err, decoded) => {
      if (err) {
        // res.status(403).send("Forbidden");
        res.status(403).json({
          message: "Forbidden"
        });
      } else {
        next();
      }
    });
  }
};
