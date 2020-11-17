// Load non-blocking PostgreSQL client (without initialisation options).
const pgp = require("pg-promise")();

// Create a new database instance from the provided connection string.
const db = pgp(process.env.DATABASE_URL);

// Create a new Express application.
const express = require("express");
const app = express();

// Bind the app to middleware for parsing HTTP request body to JSON.
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Generic error handler used by all endpoints.
function handleError(res, message, error, code) {
  console.error(message, error);
  res.status(code || 500).json({ message });
}

/**
 * The `GET /api/ping` endpoint.
 *
 * Responds with the message selected from the database.
 * Used to check the connection.
 */
app.get("/api/ping", (req, res) => {
  db.one("SELECT $1 AS value", "pong")
    .then((data) => res.status(200).send({ response: data.value }))
    .catch((error) =>
      handleError(res, "can't select from database", error, 500)
    );
});

// var crypto = require("crypto");

/**
 * The `POST /api/users` endpoint.
 *
 * Creates a new user from an email address.
 * Sets the date of creation and a random ID.
 * Responds with the newly created user.
 */
// app.post("/api/users", (req, res) => {
//   const newUser = req.body;

//   // Check that the email field is present.
//   if (!req.body.email) {
//     handleError(res, "The `email` field is required", 400);
//   } else {
//     // Generate a candidate for the user ID.
//     var maybeID = crypto.randomBytes(20).toString("hex");

//     // Check if the ID is unique.
//     db.none("SELECT * FROM users WHERE user_id = $1", maybeID)
//       .then(() => {
//         db.one(
//           "INSERT INTO users (user_id, email, created_at) VALUES ($1, $2, $3) RETURNING user_id",
//           [maybeID, email, new Date()]
//         )
//           .then((data) => res.status(201).send({ userID: data }))
//           .catch((error) => handleError(res, "error creating user", 500));
//       })
//       .catch((error) => {
//         console.log("Generated a non-unique ID, retrying");
//         maybeID = crypto.randomBytes(20).toString("hex");
//         db.one(
//           "INSERT INTO users (user_id, email, created_at) VALUES ($1, $2, $3) RETURNING user_id",
//           [maybeID, email, new Date()]
//         ).then((data) => res.status(201).send({ userID: data }));
//       });
//   }
// });

// Start the server.
const server = app.listen(process.env.PORT || 8080, function () {
  const port = server.address().port;
  console.log("Server listening on port", port);
});
