const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    let locals = {
        body: 'home',
        title: 'csmcharles'
    };
    res.render('index', locals);
});

module.exports = router;