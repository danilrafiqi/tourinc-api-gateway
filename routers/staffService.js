var express = require("express");
var router = express.Router();
const apiAdapter = require("./apiAdapter");
// const isAuthorized = require('../controller/requestAuthenticator')

const BASE_URL = "http://localhost:2009/staff";
const api = apiAdapter(BASE_URL);

router.get("/", (req, res) => {
  api.get(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

router.get("/:id", (req, res) => {
  api.get(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

router.put("/:id", (req, res) => {
  api.put(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

router.delete("/:id", (req, res) => {
  api.delete(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

module.exports = router;
