const router = require("express").Router();
const {createContent, getAboutUs,updateAboutStatus, getPrivacy, updatePrivacyStatus, updateContent} = require("../../controller/content/contentController");
const verifyAdmin = require("../../middleware/verifyAdmin");

router.post("/", createContent);
router.get("/about", getAboutUs);
router.get("/privacy", getPrivacy);
router.put("/update-about-status", updateAboutStatus);
router.put("/update-privacy-status", updatePrivacyStatus);
router.put("/update-content/:id", updateContent)
module.exports = router;