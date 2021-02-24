const router = require("express").Router();
const closetRoutes = require("./closet");


router.use("/closet", closetRoutes);

module.exports = router;
