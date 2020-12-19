# README

This repository contains both code (for the server) and documentation (for the entire project).  
Server is live at https://iwitness-app.herokuapp.com/.  
See [iCloud](https://www.icloud.com/shortcuts/0265ae8b9bcc4dfd9b5b7ff59f58b212) for the current verion of the iOS shortcut.  
_Note:_ this is under development and therefore not yet stable.

## Technical documentation

- See [SERVER](./docs/SERVER.md) for an overview of this repo.

## Project overview

### Goals

- Develop mobile applications to support members of the public through interaction with law enforcement officers.  
- Collect and analyse data on the interaction between the public and law enforcement, especially with respect to demographics including ethnicity and nationality.  

### Products

#### iOS Shortcut

A shortcut is just a simple app for iPhone (or the Apple Watch) which can be launched from a home screen shortcut or with Siri (i.e. voice control).
When launched, a shortcut executes a sequence of commands, with or without further action from the user.
We aim to create and distribute a shortcut offering useful functionality to the public during interaciton with law enforcement:  
- SOS messaging (via SMS, email, ...);  
- location streaming to publicly-accessible database, and;   
- record video while providing tips (via push notification) on best practices for recording police.  

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

#### In future...

We hope to bring functionality from the iOS shortcut described above into a _native_ application.  
Following a successful trial- and data-collection-period using the shortcut, we will begin developement of this app.  
This will be made available for both iOS (via the official app store and alternatives like AltStore) and also android (via Google Play, F-Droid or direct APK download).  
In addition to the above, we aim to develop the following extra features (may depend upon specific device):

- full hands-free mode using only voice control for activation and input;
- provide the user with accurate & automated legal advice, and;
- support from other users via 'SOS mode' with automatic location sharing.
