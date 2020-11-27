# README

This repository contains both code (for the server) and documentation (for the entire project) for iWitness.  
Visit https://iwitness-app.herokuapp.com/ to access the server & website.  
See [iCloud](https://www.icloud.com/shortcuts/0265ae8b9bcc4dfd9b5b7ff59f58b212) for the under-development verion of the iOS shortcut.

## Documentation

- See [TODO.md](./docs/TODO.md) for outstanding and completed tasks.

## Project overview _(non-technical)_

### Goals

- Develop mobile applications to support members of the public through interaction with law enforcement officers.
- Collect and analyse data on the interaction between the public and law enforcement officers, with respect to demographics including ethnicity and nationality.

### Products

#### iOS Shortcut

A shortcut is just a simple app for iPhone or the Apple Watch which can be launched from a home screen shortcut or with Siri.  
When launched a shortcut executes a sequence of commands, with or without further action from the user.  
We aim to create and distribute a shortcut offering useful functionality to the public during interaciton with law enforcement:

- Send an SOS message with the current location, to specific contacts (via SMS, email, Signal, Telegram, ...) or on social media.
- Periodically upload the current location to our publicly accessible server for the duration of the interaction, for public display on the website (along with an anonymous user ID).
- Record video and audio of interaction with law enforcement officers, which can be uploaded to cloud or social media.

#### Server (website, database & API)

This repository contains the code for the server.  
The visible part of this server (referred to as the `frontend`) is the project website providing:

- a mission statement describing the project goals in detail;
- an FAQ for the website and shortcut;
- terms of service including a privacy policy;
- user registration, followed by access to the iOS shortcut;
- support for installation, configuration and use of the shortcut;
- an interactive map displaying when & where the shortcut has been used, and;
- contact details for the project.

The behind-the-scenes parts of the server (referred to as the `backend`) consists of:

- a database holding user details (identifier, email address and demographics) and activity (date, time and location), and;
- an API allowing communication with the shortcut (reffered to as the `client`).

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

1. The developer pushes changes to GitHub.
2. The GitHub CI action runs all unit tests.
3. If all tests have succeeded, Heroku builds and deploys the server.

### Useful commands (npm)

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

### Useful commands (heroku)

The server can be deployed into production from the terminal using the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).  
Contact @TrasheRacer for details.
