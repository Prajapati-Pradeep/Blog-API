const router = require('express').Router();
const bannerRoutes = require("../modules/banner/banner.routes")


router.use("/banner", bannerRoutes)        


module.exports = router;