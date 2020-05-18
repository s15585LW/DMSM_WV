const express = require('express')
const router = express.Router()
const title = "DMSM"

router.get('/', (req, res) => {
    res.render('index', {
        pagetitle: title + "- Home"
    })
})

router.get('/contact', (req, res) => {
    res.render('contact', {
        pagetitle: title + "- Kontakt"
    })
})

module.exports = router