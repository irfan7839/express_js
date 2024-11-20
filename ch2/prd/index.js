"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Setup Bible with express js
// const express = require('express')

var app = (0, _express["default"])();
var port = 3000;
app.get('/', function (req, res) {
  res.send('Hello irfan!!!');
});
app.listen(port, function () {
  console.log("Example app listening at  http://localhost:".concat(port));
});