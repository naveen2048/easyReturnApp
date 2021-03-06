const router = require("express").Router();
const path = require("path");
const superagent = require("superagent");
const nonce = require("nonce")();
const cookie = require("cookie");
const crypto = require("crypto");
const morgan = require("morgan");
const querystring = require("querystring");
const request = require("request-promise");
var config = require("../config");


var dbModule = require("./db");
dbModule.initDb();

var db = dbModule.getDb();

// Installation App request
router.get("/shopify", (req, res) => {
    const shop = req.query.shop;

    const state = nonce();
        const redirectUri = config.forwardingAddress + "/shopify/callback";
        const installUrl =
        "https:" +
        shop +
        "/admin/oauth/authorize?client_id=" +
        config.apiKey +
        "&scope=" +
        config.scopes +
        "&redirect_uri=" +
        redirectUri

        //res.cookie("state",state);
        res.redirect(installUrl);

    // if(shop != null && shop != ""){

    //   //Check if app already installed on shop
    //   db.shoptokens.find({ shop: shop }, function(err, _shop){
    //     if(err){
    //         res.send(err);
    //     }
    //   //shop found
    //   if(_shop) {
    //     var _parentPath = path.resolve(__dirname , ".." );
    //     res.sendFile(_parentPath + "/dist/index.html");
    //   }
    //   else {
    //     const state = nonce();
    //     const redirectUri = config.forwardingAddress + "/shopify/callback";
    //     const installUrl =
    //     "https:" +
    //     shop +
    //     "/admin/oauth/authorize?client_id=" +
    //     config.apiKey +
    //     "&scope=" +
    //     config.scopes +
    //     "&redirect_uri=" +
    //     redirectUri

    //     //res.cookie("state",state);
    //     res.redirect(installUrl);
    //   }
    // });
    // }
    // else{
    //     res
    //     .status(400)
    //     .send("Missing shop parameter")
    // }
});

// Callback once installation is invoked with auth_token and other parameters
router.get("/shopify/callback", (req, res) => {
    const { shop, hmac, code, state } = req.query;
    //const stateCookie = cookie.parse(req.headers.cookie).state;

    //validate if response is from Shopify, then proceed
     //if(validateRequest(req, hmac)){
        GetAccessToken(shop,code,req,res);
    //  }
    //  else{
    //   res.status(400).send("Invalid hmac code supplied");
    //  }
});

function GetAccessToken(shop, tempcode, req, res) {
    //Get permenant access_token for the store and save to DB for future use
    const accessTokenRequestUrl = "https://" + shop + "/admin/oauth/access_token";

    const accessTokenPayload = {
      client_id: config.apiKey,
      client_secret: config.apiSecret,
      code: tempcode
    };

    request
      .post(accessTokenRequestUrl, { json: accessTokenPayload })
      .then((response) => {
        let access_token = response.access_token;

        // Save to database
        // Save the shope details which are passed by Shopify installing the app
        // Shop: Shopify
        // token: token used to access the shop data, when using the app
        var appUser = {
          shop: shop,
          token: access_token,
          installdate: new Date(),
          uninstalldate: "",
          isactive: true
        };

        db.shoptokens.save(appUser, function(err, user) {
          if (err) {
            res.send(err);
          }
          //res.json(user);
          var _parentPath = path.resolve(__dirname , ".." );
          res.sendFile(_parentPath + "/dist/index.html");
        });
      });
  }

  function validateRequest(req, hmac) {
    const map = Object.assign({}, req.query);

    delete map["signature"];
    delete map["hmac"];
    const message = querystring.stringify(map);
    const providedHmac = Buffer.from(hmac, "utf-8");
    const generatedHash = Buffer.from(
      crypto
        .createHmac("sha256", config.apiSecret)
        .update(message)
        .digest("hex"),
      "utf-8"
    );
    let hashEquals = false;
    // timingSafeEqual will prevent any timing attacks. Arguments must be buffers
    try {
      hashEquals = crypto.timingSafeEqual(generatedHash, providedHmac);
      // timingSafeEqual will return an error if the input buffers are not the same length.
    } catch (e) {
      hashEquals = false;
    }

    if (!hashEquals) {
      return false; //res.status(400).send("HMAC validation failed");
    }
    return true;
    //res.status(200).send("HMAC validated");
  }

module.exports = router;

