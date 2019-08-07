var express = require("express");
var router = express.Router();
const apiAdapter = require("./apiAdapter");
const isAuthorized = require("../midleware/requestAuthenticator");

const BASE_URL = "http://localhost:8000/api/order";
const api = apiAdapter(BASE_URL);

router.use(isAuthorized);
router.get("/", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.get("/:uid", (req, res) => {
  api.get(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

router.get("/by-date/:start/:end/:status", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

module.exports = router;
