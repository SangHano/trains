# Trains! Choo! Choo!

Classroom Manager is an SPA that allows users to effectively manage data relating to trains. Once a user has successfully registered for an account and logged in, they will be given access to a platform that allows them to see trains, add new trains, update existing trains, and remove trains.

# Setup

## Install
To install npm pacakges: `npm run install:all`

## .env
Create a .env file inside the `server` folder with the following variables:  
`DATABASE_URL` containing the postgress database connection string to your local database  
`JWT` containing the secret string for creating Json Web Tokens

## Create and Seed Database
`npm run seed` will run the prisma migrations as well as `server/seed.js` to populate the database with initial data.

## During development
Use `npm run dev` during development to start a development server for the client. This uses an npm package called `concurrently` to simultaneosly run the client and the server on your local machine. Changes to files will be watched and the server will automatically restart when changes are made.


# 34B Workshop: Authentication & OAuth

_Add_ the option for users to authenticate via Github OAuth. They should still have the ability to register and login with a username and password.

The [Github documentation on building OAuth apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps) will be very useful to reference.

## Suggestions

Here are some suggestions for what to work on:

- Frontend components are updated to signify the "Login via Github" option.
- A Github OAuth app has been created with a client id and secret.
- A redirect route has been added to the backend to receive the authorization code from Github.
- The backend is able to make requests to Github on behalf of a user by sending an access token.
- The account for a user logged in via Github is created and stored in the database.
- The client still receives a token from the server after a user is successfully authenticated, _regardless_ of whether the user logged in via Github or username/password.
