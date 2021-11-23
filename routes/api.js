const express = require("express");
const router = express.Router();

const path = require("path");
const request = require("request");
const urllib = require("urllib");

let ingredients = [];

function getDataFromApi(recipeName) {
  urllib.request(
    "https://recipes-goodness.herokuapp.com/recipes/" + recipeName,
    function (err, data, res) {
      if (err) {
        throw err;
      }
      ingredients = JSON.parse(data.toString());
    }
  );
}

router.get("/recipes/:ingredientParm", function (req, res) {
  const ingredientNameInput = req.params.ingredientParm;
  getDataFromApi(ingredientNameInput);
  res.send(ingredients);
});

module.exports = router;
