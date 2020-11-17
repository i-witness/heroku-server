// Load non-blocking PostgreSQL client (without initialisation options).
const pgp = require('pg-promise')();

// Create a new database instance from the provided connection string.
const db = pgp(process.env.DATABASE_URL);

// Create a new Express application.
const express = require('express');
const app = express();

/**
 * Generic error handler for all endpoints.
 *
 * Log the error to the console with the message
 * then respond with the message and the status code, if present;
 * otherwise default to `500`.
 */
function handleError(res: any, message: string, error: any, code: number) {
  console.error(message, error);
  res.status(code || 500).json({ message });
}

// Bind the app to middleware for parsing HTTP request body to JSON.
const bodyParser = require('body-parser');
app.use(bodyParser.json());

/**
 * Select all users.
 *
 * Return every column apart from `email` which may be identifiable.
 */
function selectUsers() {
  const query = `SELECT 
    user_id AS userID,
    created_at AS createdAt,
    ethnicity AS ethnicity,
    gender AS gender,
    age_years AS ageInYears,
    nationality AS nationality,
    education_level AS educationLevel,
    home_country AS homeCountry,
    home_postcode AS homePostcode
    FROM users`;
  return db.any(query);
}

/**
 * The `GET /api/users` endpoint.
 *
 * Responds with the list of all users.
 */
app.get('/api/users', (req, res) => {
  selectUsers()
    .then((data) => res.status(200).json({ users: data.users }))
    .catch((error) =>
      handleError(res, 'failed to select all users', error, 500)
    );
});

/**
 * Select a user by ID.
 *
 * Return every column apart from `email` which may be identifiable.
 */
function selectUser(userID: string) {
  const query = `SELECT 
    user_id AS userID,
    created_at AS createdAt,
    ethnicity AS ethnicity,
    gender AS gender,
    age_years AS ageInYears,
    nationality AS nationality,
    education_level AS educationLevel,
    home_country AS homeCountry,
    home_postcode AS homePostcode
    FROM users
    WHERE user_id = $1`;
  return db.one(query, userID);
}

/**
 * The `GET /api/users/:userID` endpoint.
 *
 * Responds with the user corresponding to the ID, if they exist.
 */
app.get('/api/users/:userID', (req, res) => {
  const userID = req.params.userID;
  selectUser(userID)
    .then((data) => res.status(200).json({ user: data }))
    .catch((error) =>
      handleError(res, `failed to select user with ID ${userID}`, error, 400)
    );
});

// var crypt = require('crypto');

/** Generate a random string 40 chars in length. */
// function randomString(): string {
//   return crypt.randomBytes(20).toString('hex');
// }

// async function userExists(userID: string): Promise<void> {
//   return db.one('SELECT * FROM users WHERE user_id = $1', userID);
// }

// async function insertUser(
//   userID: string,
//   email: string,
//   createdAt: Date
// ): Promise<void> {
//   return db.none(
//     'INSERT INTO users (user_id, email, created_at) VALUES ($1, $2, $3)',
//     [userID, email, createdAt]
//   );
// }

/**
 * The `POST /api/users` endpoint.
 *
 * Creates a new user from an email address.
 * Sets the date of creation and a random ID.
 * Responds with the newly created user.
 */
// app.post('/api/users', (req, res) => {
//   const newUser = req.body;

//   // Check the email field is present.
//   if (!newUser.email) {
//     handleError(res, 'missing required field `email`', null, 400);
//   } else {
//     const email = newUser.email;
//     var userID = randomString();
//     userExists(userID)
//       .then(() => {
//         // Regenerate the user ID then create the user.
//         userID = randomString();
//         insertUser(userID, email, new Date())
//           .then(() => res.status(201).send({ userID }))
//           .catch((error) =>
//             handleError(res, 'user creation failed', error, 500)
//           );
//       })
//       .catch(() => {
//         // No user with this ID exists, so create the user.
//         insertUser(userID, email, new Date())
//           .then(() => res.status(201).send({ userID }))
//           .catch((error) =>
//             handleError(res, 'user creation failed', error, 500)
//           );
//       });
//   }
// });

// Start the server.
const server = app.listen(process.env.PORT || 8080, function () {
  const port = server.address().port;
  console.log('Server listening on port', port);
});
