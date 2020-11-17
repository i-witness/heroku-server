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
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.get("/ping", (req, res) =>
  res.status(200).send({
    message: "pong",
  })
);

app.listen(port, () => console.log(`Server is running on PORT ${port}`));
