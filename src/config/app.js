const express = require("express");
const router  = require("../routes")

const app = express()



app.use(router)

app.use((req, res, next) => {
    next({status: 404, msg: "Not found"})
})

// Error handling Middleware
app.use((error, req, res, next) =>{
    console.log(error)
    let status = error.status || 500;
    let msg = error.msg || "Internal server error"

    res.status(status).json({
        data: null,
        msg: msg,
        meta: null
    })
})

module.exports = app;