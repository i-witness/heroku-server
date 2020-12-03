# README: _iWitness project_

This repository contains both code (for the server) and documentation (for the entire project) for iWitness.  
Visit https://iwitness-app.herokuapp.com/ to access the server & website.  
See [iCloud](https://www.icloud.com/shortcuts/0265ae8b9bcc4dfd9b5b7ff59f58b212) for the under-development verion of the iOS shortcut.

## Technical documentation

- See [SERVER](./docs/SERVER.md) for an overview of this repo.

## Project overview

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
