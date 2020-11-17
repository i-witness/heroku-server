// Create a connection to our Postgres database which can be used by all route handlers.
var pgp = require("pg-promise")(/* options */);
var db = pgp(process.env.DATABASE_URL);

// Check that we can select from the database.
db.one("SELECT $1 AS value", 123)
  .then(function (data) {
    console.log("DATA:", data.value);
  })
  .catch(function (error) {
    console.log("ERROR:", error);
  });

// Create a new Express application.
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
