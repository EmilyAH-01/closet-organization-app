const router = require("express").Router();
const closetController = require("../../controllers/closetController");

//require("../../services/cloudinary.config");
//const upload = require("../../services/multer");

// Matches with "/api/closet"
router
  .route("/")
  .get(closetController.findAll)
  .post(closetController.create);
  //.post("", upload.single("image"), closetController.create);

// Matches with "/api/closet/:id"
router
  .route("/:id")
  .get(closetController.findById)
  .put(closetController.update)
  .delete(closetController.remove);

// router
//   .route("/images")
//   .post("", upload.single("image"), closetController.createImage);

module.exports = router;
