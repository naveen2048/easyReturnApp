var express = require("express");
const { parse } = require("querystring");
var router = express.Router();
var dbModule = require("./db");
dbModule.initDb();
const superagent = require("superagent");
var db = dbModule.getDb();

router.post("/order", function(req, res) {
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
      .set("X-Shopify-Access-Token", _data.token)
      .end((err, response) => {
        if (err) {
          return console.log(err);
        }

        //check to see if email and order # matches on the record received
        //console.log(response.text);
        var result = JSON.parse(response.text);
        if (!result.orders && (result.orders[0].email !== _data.email)) {
          res.status(404).send({
            error: "Email & Order # does not match. Please check and try again"
          });
        } else {
          res.send(response.body);
        }
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
      .get(
        `https://${_data.shop}/admin/products.json?product_id=${
          _data.productids
        }&fields=images`
      )
      .set("X-Shopify-Access-Token", _data.token)
      .end((err, response) => {
        if (err) {
          return console.log(err);
        }
        res.send(response.body);
      });
  });
});

/*
Order refund
*/
router.post("/order/refund", (req, res) => {
  let body = "";
  req.on("data", chunk => {
    body += chunk.toString(); // convert Buffer to string
  });
  req.on("end", () => {
    debugger;
    //perform db save operation
    var _data = JSON.parse(body);

    db.orderrefund.save(_data, (err, data) => {
      if (err) {
        res.send("Not able save");
      }
      res.status(200).send(data);
    });
  });
});

/*
Admin orders
*/
router.get("/order/admin", (req, res) => {
  db.orderrefund.find({}, (err, data) => {
    if (err) {
      res.send("Not reterieve data");
    }
    res.send(data);
  });
});

module.exports = router;
