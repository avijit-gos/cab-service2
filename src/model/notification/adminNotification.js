const mongoose = require("mongoose");

const AdminNotificationSchema = mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId},
    type: {type: Number, default: 1},
    from: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    booking: {type: mongoose.Schema.Types.ObjectId, ref: "BookCab"},
}, {timestamps: true});

module.exports = new mongoose.model("AdminNotification", AdminNotificationSchema)