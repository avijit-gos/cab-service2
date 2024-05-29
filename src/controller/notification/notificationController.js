const AdminNotification = require("../../model/notification/adminNotification");
const Notification = require("../../model/notification/userNotification")
class NotificationController {
    constructor() {}

    async getNotifications(req, res, next) {
        try {
            const page = req.query.page || 1;
            const limit = req.query.limit || 20;
            const notifications = await AdminNotification.find({}).populate({path: "from", select: "name email profile_img"}).skip(limit*(page-1)).limit(limit).sort({createdAt: -1});
            return res.status(200).json({statusCode: 200, notifications})
        } catch (error) {
            next(error)
        }
    }

    async getUserNotification(req, res, next) {
        try {
            const page = req.query.page || 1;
            const limit = req.query.limit || 20;
            const notifications = await Notification.find({to: req.user._id}).skip(limit*(page-1)).limit(limit).sort({createdAt: -1});
            return res.status(200).json({statusCode: 200, notifications})
        }
        catch(error) {
            next(error);
        }
    }
}

module.exports = new NotificationController()