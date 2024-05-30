const router = require("express").Router();
const {createContent, getAboutUs,updateContent} = require("../../controller/content/contentController");
const verifyAdmin = require("../../middleware/verifyAdmin");

router.post("/", createContent);
router.get("/", getAboutUs);
router.put("/:id", updateContent)
module.exports = router;