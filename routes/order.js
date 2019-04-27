var express = require("express");
const { parse } = require("querystring");
var router = express.Router();
//var db = require("./db").getDb();
var mongojs = require("./db").getMongojs();
const superagent = require("superagent");

router.post("/order", function(req, res){
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString(); // convert Buffer to string
    });
    req.on("end", () => {
        /**
         *  data
         *     .token
         *     .shop
         *     .order#
         *     .email - once the order is reterieved, check if the email passed matches with the record
         */
        var _data = JSON.parse(body);

        superagent
        .get(`https://${_data.shop}/admin/orders.json?name=${_data.order_number}`)
        .set('X-Shopify-Access-Token', _data.token)
        .end((err, response) => {
          if (err) {
            return console.log(err);
          }
          res.send(response.body);
        });
    });
});

router.post("/order/product_images", (req, res) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString(); // convert Buffer to string
    });
    req.on("end", () => {
        /**
         *  data
         *     .token
         *     .shop
         *     .product ids#
         */
        var _data = JSON.parse(body);

        superagent
        .get(`https://${_data.shop}/admin/products.json?product_id=${_data.productids}&fields=images`)
        .set('X-Shopify-Access-Token', _data.token)
        .end((err, response) => {
          if (err) {
            return console.log(err);
          }
          res.send(response.body);
        });
    });
});


module.exports = router;