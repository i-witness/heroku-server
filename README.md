# iWitness @ Heroku

A single application which is comprised of:

- a website for the project, written with Angular;
- a Postgres database recording user demographics and usage metrics, and;
- a REST API with which database records can be read and updated.

This application uses the Node framework in the backend (using TypeScript, rather than JavaScript).
Node serves the Angular frontend as static files, which are built in the `postinstall` hook,
as well as the REST API endpoints.

It can be deployed both locally and also on the [Heroku](https://www.heroku.com/solutions) platform.

## Design goals

### Website

#### Provide essential information on the project

- Mission statement.
- Privacy policy.
- FAQ.
- Contact & social media links.
- Etc.

#### Instruct users on setup & use of the iWitness shortcut for iOS

- Download link for shortcut (hosted on iCloud).
- Walk through installation process; explaining what the shortcut does and which permissions are needed.
- Guide the user through their first use of the shortcut.

#### Gather demographic information on the user

This is done via a form which must be submitted before a download link can be obtained.
Submitting this form returns a randomly generated user ID, which is used for configuration of the shortcut.

### Database

#### Store data collected on the user through the website

Data gathered will include the following non-identifying demographics:

- ethnicity;
- nationality;
- gender;
- age range;
- educational attainment, and;
- home country & postcode.
  The email address provided by the user along with this data will also be stored;
  this will be treated as potentially identifying information and therefore not be publicly accessible.

#### Store metrics gathered through use of the iOS shortcut

Each time a user launches the shortcut, record:

- the date and time;
- the location provided by GPS, and;
- the randomly-generated, unique user ID.

### API

#### Provide access to the database

- Allow the website to create user demographic records.
- Allow the iOS shortcut to create use metric records.

## Source-code structure

- `app.json` is a manifest format for describing web apps; itt declares environment variables, add-ons, and other information required by Heroku.
- `server.js` contains all server-side (backend) code used to implement the REST API; written with Node, using the Express framework and the Postgres driver.
- `src/` contains all client-side (frontend) code used by Angular.

## Setup guide

### Local deployment

When deployed locally, this application can be configured to use either a local Postgres installation or the Postgres add-on used by Heroku.
This is determined by the value of the `DATABASE_URL`.

#### Local database

Once Postgres is setup and you can connect, set the environment variable with

```
export DATABASE_URL=postgres://$(whoami)@localhost:5432/$(whoami)?sslmode=disable
```

See [this guide](https://devcenter.heroku.com/articles/heroku-postgresql#local-setup) for more info.

#### Add-on database

Export the URI given in the Heroku dashboard, under the settings for the addon, as `DATABASE_URL`.
The `psql` terminal can be launched against this database to run queries and execute commands,
by running `heroku pg:psql`.

### Live deployment (Heroku)

When deployed on Heroku, this application uses the Postgres add-on.
Deploy simply by pushing changes to the remote git repo.
The app can be opened from the CLI by running `heroku open`.

## Useful commands

### Install dependencies (then build the Angular frontend)

Run `npm install`; the Angular frontend is build using a `postinstall` hook.

### Build the Angular frontend

Run `ng build --output-path dist`; note that since the frontend is served as static files,
this command must be re-run whenever Angular files are changed in order to serve the latest version.

### Run the server locally

Run `npm run start` to start serving both the frontend and the API locally.

### Lint and fix

Run `npm run lint --fix`.

### Unit test

Run `npm run test`.
