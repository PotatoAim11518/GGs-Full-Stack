# MVP List

GGs, a Goodreads clone, is a website for users to share videogame-themed reviews and articles, engage in light discussions, and tell other people why their opinion is wrong.

## Authentication
* Sign in with Session-based authentication
* Users can't use certain features without logging in
* Logged in users are directed to their 'My Games' page which displays the games that they track
* Logged out users are directed to the Home page with a list of links to genres

## Games
### Home/Landing Page
* The Global Library of Games as a list of Genres
* Each Genre Page has Links to individual game pages

### Individual Games
* Description of the game
* Aggregate rating
* Genre and platform information [can be part of Tag bonus feature]
* Publisher & developer information
* Users have dropdown to choose between Want to Play, Currently Playing, and Played (See Game Status)
* Community Reviews of the game are listed below the game information

## Game Library (personal)
* Links to games played, are playing, and want to play
* A drop-down on the game page that adds this to the player's personal lists
* Each of these render a table that lists the relevant information on each game included in each of these categories
* Logged out users are redirected to the login page

## Reviews
* Exists as a list of player reviews on the game page.
* Show the user's rating for the game
* Allow logged in users to write a review for the game only if they've played it or are playing it
* Allow logged in users to rate the game if they've played it or are playing it
* Submitting the review adds it to the Reviews for that game and redirects them to that game page
* Logged out users will be redirected to the login page if they try to write a review

## Search
* Allows players to search for games by string, genre, platform, publisher
* Redirect the user to a results page if the result is valid, otherwise show a "Games not found" message
* Should work for both logged in and logged out users

# Navigation


## Hosting on Heroku
* Host the app on Heroku

# Bonus Nice-to-Haves
## Games Nice-to-Haves

## Game Library Nice-to-Haves
## Search across multiple models
* Can filter by different criteria for each game, such as rating, genre, score.

## Reviews
* Filters certain terms
* Stars or goose heads out of 5. Golden goose for really high ratings

## Tags
Marks individual games with things like ratings, genres, editor-recommended, etc.
