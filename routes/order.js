var express = require("express");
const { parse } = require("querystring");
var router = express.Router();
//var db = require("./db").getDb();
var mongojs = require("./db").getMongojs();
const superagent = require("superagent");


module.exports = router;