"use strict";

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.render('index');
  });

  app.get('/instableConnection', function (req, res) {
    res.render('instableConnection');
  });
};