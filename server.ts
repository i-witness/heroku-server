declare var require: any;

var crypt = require('crypto');

/** Generate a random string 40 chars in length. */
function randomString(): string {
  return crypt.randomBytes(20).toString('hex');
}

// Load non-blocking PostgreSQL client (without initialisation options).
const pgp = require('pg-promise')();

// Create a new database instance from the provided connection string.
const db = pgp(process.env.DATABASE_URL);

// Create a new Express application.
const express = require('express');
const app = express();

// Used to query and mutate the database.
const queries = require('./db/queries');
const mutations = require('./db/mutations');

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

// Create link to Angular build directory
var distDir = __dirname + '/dist/';
app.use(express.static(distDir));

/**
 * The `GET /api/users` endpoint.
 *
 * Responds with the list of all users, including:
 * - user ID;
 * - email address;
 * - home country, and;
 * - the date of creation.
 */
app.get('/api/users', (req, res) => {
  console.debug('handling GET request to /api/users');
  queries
    .userDetails(db)
    .then((data) => {
      console.debug('user details query succeeded:', data);
      res.status(200).json({ users: data });
    })
    .catch((error) => {
      console.error('user details query failed:', error);
      res.status(500).json({ error });
    });
});

/**
 * The `POST /api/users/:userID/activity` endpoint.
 *
 * Creates a new activity for the given user, then responds
 * with `{ success: true }`.
 */
app.post('/api/users/:userID/activity', (req, res) => {
  console.debug('handling POST request to /api/users/:userID/activity');

  const userID = req.params.userID;
  console.debug('user ID:', userID);

  const location = req.body.location;
  console.debug('user location:', location);

  mutations
    .userActivity(db, userID, location)
    .then(() => {
      console.debug('user activity creation succeeded');
      res.status(201).json({ success: true });
    })
    .catch((error) => {
      console.error('user activity creation failed:', error);
      res.status(500).json({ error });
    });
});

// Start the server.
const server = app.listen(process.env.PORT || 8080, function () {
  const port = server.address().port;
  console.log('server listening on port:', port);
});
