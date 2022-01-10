var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: './uploads'});
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;



router.get('/page', function(req, res, next) {
    res.render('blog', {title:'Blog'});
    req.flash('success', 'Welcome to blog page');
    res.redirect('/blog/page');
  });
  



  module.exports = router;
