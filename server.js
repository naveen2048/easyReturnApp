const express = require("express");
const path = require("path");

const app = new express();

app.use(express.static(__dirname + "/dist"));

app.listen(process.env.PORT || 8081);

//default path to tell Node to load index.html
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
});

console.log('Server is listening on port 8081');