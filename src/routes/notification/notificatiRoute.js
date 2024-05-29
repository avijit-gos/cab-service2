const router = require("express").Router();
const {getNotifications, getUserNotification, updateNotification} = require("../../controller/notification/notificationController");
const authentication = require("../../middleware/authentication");

router.get("/admin", getNotifications);
router.get("/user-notification", authentication, getUserNotification);
router.put("/update/:id", updateNotification)

module.exports = router;