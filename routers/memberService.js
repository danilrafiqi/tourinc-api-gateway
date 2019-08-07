var express = require("express");
var router = express.Router();
const apiAdapter = require("./apiAdapter");
const isAuthorized = require("../midleware/requestAuthenticator");

const BASE_URL = "http://localhost:8000/api/member";
const api = apiAdapter(BASE_URL);

router.use(isAuthorized);
router.get("/", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.post("/", (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

router.get("/:uid", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.put("/:uid", (req, res) => {
  api.put(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.get("/by-date/:start/:end/:type", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.put("/:uid/activate", (req, res) => {
  api.put(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

router.put("/:uid/suspend", (req, res) => {
  api.put(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

router.put("/:uid/unsuspend", (req, res) => {
  api.put(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

router.delete("/:uid", (req, res) => {
  api.delete(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.get("/:email/token", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.put("/:email/save-token", (req, res) => {
  api.put(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

router.put("/:uid/update", (req, res) => {
  api.put(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

//summary
router.get("/summary/:time", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.get("/summary/:start/:end", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.get("/chart/:time", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.get("/chart/:start/:end", (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

module.exports = router;
