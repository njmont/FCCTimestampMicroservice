var express = require('express');
var path = require('path');
var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//Setup for public folder
app.use(express.static(path.join(__dirname, 'public')));


var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on port'+port+' !');
})

/* GET home page. */
app.get("/", function(req, res, next){
  res.render("index", {});
})

app.param('date', function(req, res, next, value) {
  "use strict";

  let return_object = {
    unix: null,
    natural: null
  }
  if (Number(value)) {
    value = Number(value) * 1000; //JS needs it in miliseconds
  }

  let date = new Date(value);
  if (date != "Invalid Date") {
    return_object.unix = Math.round(date.getTime() / 1000); //Unix does it in seconds
    return_object.natural = date.toDateString();
  } else {
    console.log("Invalid date");
  }

  res.json(return_object);
});

app.get("/:date", function(req, res, next){
})


module.exports = app;
