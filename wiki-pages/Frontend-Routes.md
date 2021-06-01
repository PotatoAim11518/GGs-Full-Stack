# User-facing routes
## `/login`
### Log in page
This page displays a log in form
* `GET /login`
* `POST /login`
## `/signup`
This page displays a signup form.
### Sign up page
* `GET /signup`
* `POST /signup`
## `/`
This page displays the top three trending games, as well as a navigation bar with login/signup or logout buttons. The navigation bar has a browse button (groups games into categories i.e. publishers, genres, platforms), a search bar, a My-Games button,below the top three trending games is a div of a assortment of genres and a Logo/Home button.
* `GET /`
* `GET /games/:id`
* `GET /genres/:id`
## `/my-games`
This page displays a collection of games that the user has added to their library. These games can be filtered depending on their status and also removed from the user's library. If the user clicks on the games cover art, the user will be redirected to the corresponding `games/:id` page.
* `DELETE /my-games`
* `GET /my-games`
* `GET /games/:id`
## `/games/:id`
This page displays a games cover art, description, release date, rating, genre, platform, and publisher. This page also displays reviews for the game that can be created and deleted by the user. The user can add the game to their library through a drop down menu.
* `GET /games/:id`
* `POST /games/:id/reviews`
* `DELETE /games/:id/reviews`
* `POST /games/:id`
* `POST /my-games`
## `/genre/:id`
This page displays a section of games that corresponds with an individual Genre. If I click on a game it will redirect me to that games page.
* `GET /genres/:id`
* `GET /games/:id`
## `/publisher/:id`
This page displays a section of games that corresponds with an individual Publisher. If I click on a game it will redirect me to that games page.
* `GET /publishers/:id`
* `GET /games/:id`
## `Nav-Bar (rendered on every page of the App)`
This displays buttons that would redirect the user to the corresponding page
* `GET /`
* `GET /signup`
* `GET /login`
* `GET /logout`
* `GET /my-games`
* `GET /publishers/:id`
* `POST /search`
* `GET /genres/:id`
