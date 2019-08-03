var express = require("express");
var router = express.Router();
const apiAdapter = require("./apiAdapter");
// const isAuthorized = require('../controller/requestAuthenticator')

const BASE_URL = "http://localhost:2019/";
const api = apiAdapter(BASE_URL);

router.post("/", (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

module.exports = router;
