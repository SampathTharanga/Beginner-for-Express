const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-book', (req, res, next) => {
    res.send('<form action="/book" method="POST"><input type="text" name="title"/><button type="submit">Add Book</button></form>')
})

app.use('/book', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    res.send('<h1">Default Middleware</h1>')
})

app.listen(8000, () => {
    console.log("Server Started!")
})