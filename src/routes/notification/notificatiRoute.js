const router = require("express").Router();
const {getNotifications, getUserNotification} = require("../../controller/notification/notificationController");
const authentication = require("../../middleware/authentication");

router.get("/admin", getNotifications);
router.get("/user-notification", authentication, getUserNotification);

module.exports = router;