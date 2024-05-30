const createHttpError = require("http-errors");
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

    async updateNotification(req, res, next) {
        try {
            if(!req.params.id) {
                throw createHttpError.BadRequest({message: "Invalid notification id"})
            }
            const updateNotification = await AdminNotification.findByIdAndUpdate(req.params.id, {$set: {isRead: true}}, {new: true});
            return res.status(200).json({messag: "Message read", status: 200})
        }
        catch(error) {
            next(error)
        }
    }

    async updateUserNotification(req, res, next) {
        try {
            if(!req.params.id) {
                throw createHttpError.BadRequest({message: "Invalid notification id"})
            }
            const updateNotification = await Notification.findByIdAndUpdate(req.params.id, {$set: {isRead: true}}, {new: true});
            return res.status(200).json({messag: "Message read", status: 200})
        }
        catch(error) {
            next(error)
        }
    }
}

module.exports = new NotificationController()