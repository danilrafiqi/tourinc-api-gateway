const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("../config");

const Staffs = require("../db/model/staffs");
const crypto = require("crypto");

router.post("/register", (req, res) => {
  let hashedPassword = bcrypt.hashSync(req.body.password, 8);
  console.log(hashedPassword);
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    },
    (err, user) => {
      if (err) return res.status(500).send("Registration failed");

      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400
      });

      res.status(200).send({ auth: true, token: token });
    }
  );
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send("Internal server error");
    if (!user) return res.status(404).send("User not found");

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 86400 });

    res.status(200).send({ auth: true, token: token });
  });
});

router.post("/signup", (req, res) => {
  Staffs.findOne({ email: req.body.email })
    .populate("parent_id")
    .exec((err, data) => {
      console.log("dadi", data);
      if (data) {
        res.json({
          message: "user found, please use another email",
          version: "1.0.0",
          data: null
        });
      } else {
        const hash = crypto
          .createHash("sha256")
          .update(req.body.password)
          .digest("hex");

        dataNew = { ...req.body, ...{ password: hash } };
        Staffs.create(dataNew, (err, data) => {
          const token = jwt.sign({ data }, config.secret, {
            expiresIn: 86400
          });
          res.json({
            message: "success",
            version: "1.0.0",
            token,
            data
          });
        });
      }
    });
});

router.post("/signin", (req, res) => {
  const hash = crypto
    .createHash("sha256")
    .update(req.body.password)
    .digest("hex");
  Staffs.findOne({ email: req.body.email, password: hash })
    .populate("parent_id")
    .exec((err, data) => {
      if (err) throw err;
      if (data) {
        const token = jwt.sign({ data }, config.secret, {
          expiresIn: 86400
        });
        res.json({
          message: "success",
          version: "1.0.0",
          token,
          data
        });
      } else {
        res.json({
          message: "user or password not valid",
          version: "1.0.0",
          data: null
        });
      }
    });
});

module.exports = router;
