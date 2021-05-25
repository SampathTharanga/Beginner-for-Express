const express = require('express')

const router = express.Router()

router.use('/user-details' ,(req, res, next) => {
    res.send({
        name:"Sampath",
        age:"29"
    })
})

router.use('/', (req, res, next) => {
    res.send('<h1">Default Middleware</h1>')
})

module.exports = router;