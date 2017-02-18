var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next){
  res.render("index", {});
})

router.param('date', function(req, res, next, value) {
  "use strict";

  let return_object = {
    unix: null,
    natural: null
  }
  if (Number(value)) {
    value = Number(value) * 1000;
  }

  let date = new Date(value);
  if (date != "Invalid Date") {
    return_object.unix = Math.round(date.getTime() / 1000);
    return_object.natural = date.toDateString();
  } else {
    console.log("Invalid date");
  }

  res.json(return_object);
});

router.get("/:date", function(req, res, next){
})


module.exports = router;
