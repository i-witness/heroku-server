// Load non-blocking PostgreSQL client (without initialisation options).
const pgp = require('pg-promise')();

// Create a new database instance from the provided connection string.
const db = pgp(process.env.DATABASE_URL);

// Create a new Express application.
const express = require('express');
const app = express();

// Bind the app to middleware for parsing HTTP request body to JSON.
const bodyParser = require('body-parser');
app.use(bodyParser.json());

/**
 * Generic error handler for all endpoints.
 *
 * Log the error to the console with the message,
 * then respond with the message and the status code
 * (if present, otherwise default to `500`).
 */
function handleError(res: any, message: string, error: any, code: number) {
  console.error(message, error);
  res.status(code || 500).json({ message });
}

function selectUsers() {
  return db.any('SELECT user_id AS userID FROM users');
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
