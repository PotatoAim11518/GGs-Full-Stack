# API-Routes
This web app uses the following API routes to dynamically update the page to create a single-page-app-like feel for the user for specific features.
## Reviews
* A logged in user may delete one of their own reviews, removing it from the list of visible Reviews without causing a refresh/redirect.
  * `DELETE /api/games/:id/reviews`
* A logged in user may review a game without causing a refresh/redirect.
  * `POST /api/games/:id/reviews`
## Rating
* A logged in user can write a rate a game without causing a refresh/redirect.
  * `POST /api/games/:id/ratings`
## My-Games Status
* A logged in user can may add a game to their library into a pre-defined category without causing a refresh /redirect.
    * `POST api/my-games/status`
    * `POST api/games/:id/status`
