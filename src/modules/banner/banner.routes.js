const router = require('express').Router()


router.route('/')
    .get((req, res, next) => {
        // 1000
        res.json({
            data:[],
            msg: "This is banner section",
            meta: {}
        })
    })

router.route("/:id")
        .put((req, res, next) => {})
        .delete((req, res, next) => {})
        .get((req, res, next) => {})

module.exports = router;