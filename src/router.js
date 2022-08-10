const express = require('express')
const router = express.Router();


router.get('/', (req, res) =>{
    res.render('index.ejs')
})

router.get('/pay', (req, res) =>{
    res.render('pay.ejs')
})

router.get('/about', (req, res) =>{
    res.render('about.ejs')
})

router.get('/pricing', (req, res) =>{
    res.render('pricing.ejs')
})

router.get('/vouches', (req, res) =>{
    res.render('vouches.ejs')
})

router.get('/admin', (req, res) =>{
    res.status(418).send('I\'m a teapot')
})

router.all('*', (req, res) =>{
    res.status(404).render('404.ejs')
})

module.exports = router;