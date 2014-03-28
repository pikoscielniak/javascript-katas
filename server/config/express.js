"use strict";

var express = require("express"),
  path = require('path');

var rootPath = path.normalize(__dirname + "/../../");

module.exports = function (app) {
  app.configure(function () {
    app.set('views', rootPath + '/server/views');
    app.set('view engine', 'jade');
    app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.session({secret: 'test'}));
    app.use(express.static(rootPath + '/public'));
  });
};
