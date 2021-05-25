const express = require('express')

const router = express.Router()


router.use('/add-book', (req, res, next) => {
    res.status(200).send('<form action="/book" method="POST"><input type="text" name="title"/><button type="submit">Add Book</button></form>')
})

router.use('/book', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})


module.exports = router