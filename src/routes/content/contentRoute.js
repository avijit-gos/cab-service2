const router = require("express").Router();
const {createContent, getAboutUs, getPrivacy,updatestatus, updateContent, getAllContents} = require("../../controller/content/contentController");
const verifyAdmin = require("../../middleware/verifyAdmin");

router.post("/", createContent);
router.get("/about", getAboutUs);
router.get("/privacy", getPrivacy);
router.put("/update-status/:id", updatestatus);
router.put("/update-privacy-status", updatestatus);
router.put("/update-content/:id", updateContent);
router.get("/", getAllContents)
module.exports = router;