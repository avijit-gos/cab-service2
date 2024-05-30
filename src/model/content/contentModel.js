const mongoose = require("mongoose");

const Contentschema = monngoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    slug: {type: String, default: "about"},
    title: {type: String, default: ""},
    description: {type: String, default: ""},
    tags: { type: [String], default: [] },
    contact_info: {
        website: {type: String, default: ""},
        phone: {type: String},
        social: {
            fb: {type: String},
            tw: {type: String},
        }
    }
}, {timestamps: true})