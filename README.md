# Server

Hosted at https://iwitness-app.herokuapp.com/ using the [Heroku](https://www.heroku.com/) platform.

## Overview of the iWitness project

### Goals

- Develop mobile applications to support members of the public through interaction with law enforcement officers.
- Collect and analyse data on the interaction between the public and law enforcement officers, with respect to demographics such as ethnicity, nationality, etc.

### Products

#### Shortcut for iOS

- A shortcut is essentially a simple app for iPhone or the Apple Watch, which can be launched from a home screen shortcut or voice control via Siri.
- Create a shortcut which offers functionality useful during interaction with law enforcement officers:
  - send SOS messages to specific contacts with the user's current location;
  - upload the user's location to a publicly-accessible database;
  - record video with the option to quickly upload to cloud storage or share on social media, and;
  - provide contact details for relevant law firms, solicitors and legal aid organisations.
- Each time the shortcut is activated, a message is sent to our server with:
  - the date and time on the user's phone;
  - the user's current location, and;
  - a unique identifier for the user, consisting of a random string of charechters.

#### Server

- Provide a website for the project containing all useful information (mission statement, contact details, privacy policy, etc).
- Offer free download of the iOS Shortcut, after collection of anonymous demographic data from the user;
- Guide the user through installation of the shortcut, configuration of the user ID and SOS contacts, and first use.
- Display an interactive map showing when and where the shortcut has been used, along with the anonymous demographic data of each user.

## Technical description

This server consists of:

- a Node.js backend exposing a REST API written with the Express library;
- an Angular frontend (i.e. the website), and;
- a Postgres database.

### Prerequisites

Before development, you need to:

- clone this repository to your machine;
- install Postgres on your machine, create yourself a user and database, and start the server, and;
- set the `DATABASE_URL` environment variable to reference your local database by running `export DATABASE_URL=postgres://$(whoami)@localhost:5432/$(whoami)?sslmode=disable` from the terminal.

### Build pipeline

1. Push changes to GitHub.
2. A GitHub CI action runs all unit tests.
3. The new code will be deployed via Heroku if all tests have succeeded.

### Useful commands

Execute using `npm run command-name` from the terminal.

#### `build:dist`

Build the frontend static files to `dist/`, where they can be served by the backend.  
Runs automatically after `npm install`, in order to deploy using Heroku.

#### `start:frontend`

Serve _only_ the frontend at http://localhost:4200, hot-reloading after code changes.  
Useful for frontend development when the backend is not required.

#### `start`

Start the backend _and_ frontend at http://localhost:8080 serving both the API endpoints and the frontend.  
Can be run locally for development or by Heroku for production.

#### `test:chromium`

Open a Chromium browser, run unit tests and display the results.  
Tests are re-run after code changes.

#### `test:ci`

Run unit tests without opening a browser, while using Chrome in the background.  
Used by GitHub for continuous integration (CI).

#### `prettier:write`

Format all files in the project.
