const Content = require("../../model/content/contentModel");
const mongoose = require("mongoose");
const ceateError = require("http-errors");

class ContentController {
    constructor() {}
    
    async createContent(req, res, next) {
        try {
        const data = await Content.find({slug: req.body.slug});

        if(data.length > 0) {
            console.log("**************************", req.body.slug)
            const result = await Content.updateMany({slug: req.body.slug}, {$set: {status: "inactive"}}, {new: true});
            console.log(result)
        }
        const dataObj = Content({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            tags: req.body.tags,
            contact_info: req.body.contact_info ? req.body.contact_info  : {}
        });
        const result = await dataObj.save();
        return res.status(201).json({message: "About us content created", statusCode: 201, data: result});
        } catch (error) {
            next(error)
        }
    }

    async getAboutUs(req, res, next) {
        try {
           const data = await Content.find({slug: req.query.slug});
           return res.status(200).json({statusCode: 200, data})
        } catch (error) {
            next(error)
        }
    }

    async updateContent(req, res, next) {
        try {}
        catch(error) {
            next(error)
        }
    }
}

module.exports = new ContentController()