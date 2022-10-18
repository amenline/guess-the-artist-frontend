# GUESS THE ARTIST

This is a simple game that lets you guess an artist's full name from an album's title.\
This repo contains the frontend code for the application and the backend codes can be found [here](https://github.com/amenline/guess-the-artist).\
Currently, the app is deployed to Heroku, [https://guess-the-artist-game.herokuapp.com/](https://guess-the-artist-game.herokuapp.com/)

## How the game works

- For each round of the game, a new artist is selected randomly from a list of 20 artists
- The user is randomly shown an album by the artist using the [iTunes API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1)
- The user has three tries to guess right the artist's full name. On the third try, the album's artwork is displayed as a hint.
- Points are rewarded for each right answer based on the number of tries.
- When a user is unable to guess an artist's name after all three tries, the score is saved along with a username.
- On a scoreboard page, all the scores can be viewed.

## Running the App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`
Installs all the dependencies of the project defined in the [package.json](package.json) file

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
