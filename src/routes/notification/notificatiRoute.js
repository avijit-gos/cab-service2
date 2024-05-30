const router = require("express").Router();
const {getNotifications, getUserNotification, updateNotification, updateUserNotification} = require("../../controller/notification/notificationController");
const authentication = require("../../middleware/authentication");

router.get("/admin", getNotifications);
router.get("/user-notification", authentication, getUserNotification);
router.put("/update/:id", updateNotification)
router.put("/user-update/:id", updateUserNotification)

module.exports = router;