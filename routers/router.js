var express = require("express");
var router = express.Router();
var memberRouter = require("./memberService");
var guestRouter = require("./guestService");
var orderRouter = require("./orderService");
var smsRouter = require("./smsService");
var pushNotifRouter = require("./pushNotifService");
var staffRouter = require("./staffService");
var staffAuthRouter = require("./staffAuthService");
var mailRouter = require("./mailService");
// var authRouter = require('../controller/AuthController')

router.use((req, res, next) => {
  console.log("Called: ", req.path);
  next();
});

router.use("/api/v1/member", memberRouter);
router.use("/api/v1/guest", guestRouter);
router.use("/api/v1/order", orderRouter);
router.use("/api/v1/sms", smsRouter);
router.use("/api/v1/push-notif", pushNotifRouter);
router.use("/api/v1/staff", staffRouter);
router.use("/api/v1/staff-auth", staffAuthRouter);
router.use("/api/v1/mail", mailRouter);
// router.use(authRouter);

module.exports = router;
