var express = require("express");
var router = express.Router();
const apiAdapter = require("./apiAdapter");
// const isAuthorized = require('../controller/requestAuthenticator')

const BASE_URL = "http://localhost:2009/staff-auth";
const api = apiAdapter(BASE_URL);

router.post("/signin", (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

router.post("/signup", (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

module.exports = router;
