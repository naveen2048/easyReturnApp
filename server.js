const express = require("express");
const path = require("path");
var config = require("./config");
var order = require("./routes/order");
var install = require("./routes/install");

//DB module & initilization
var dbModule = require("./routes/db");
dbModule.initDb();

var db = dbModule.getDb();

const app = new express();

app.use(express.static(__dirname + "/dist"));

var _port = process.env.PORT || 8091;

app.listen(_port);


// Get shop token
app.get("/shop/:id", (req, res, next) => {
   let shop = req.params.id;

   db.shoptokens.find({ shop: shop }, function(err, _shop){
       if(err){
           res.send(err);
       }
    res.json(_shop);
   });
});

//Route: Orders
app.use("/api", order);

app.use(install);

//default path to tell Node to load index.html
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
});

console.log(`Server is listening on port ${_port}`);