# User Stories
## Users

### Signup
* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the /signup page:
    * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass
        * and repopulate the form with my valid entries (except my password).
        * and prompt me on which required fields I need to fill out.
    * So that I can try again without needing to refill forms I entered valid data into.

### Log in
* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/login` page:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the lob-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

### Demo User
* As an unregistered and unauthorized user, I would like an easy-to-find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
  * When I'm on either the `/signup` or `/login` pages:
    * I can click on a Demo User button to log me in and allow me access as a normal user.
      * So that I can test the site's features and functionality without needing to stop and enter credentials.

### Log out
* As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
  * While on any page of the site:
    * I can log out of my account and be redirected to the home page.
      * So that I can easily log out to keep my information secure.

## GGs (GoodGames)

### Search
* As a logged in *or* logged out user, I want to be able to search for a specific game by name.
  * When I am on any page:
    * I can type a string into the search field
      * So that I can be redirected to a page with the corresponding game if it is found.
      * or to a "Game not found" page if the game is not found.
### Viewing Individual Games
<!-- Summary -->
* As a logged in *or* logged out user I want to be able to view the information for a specific game.
  * When I am on the `/games/:id` page:
    * I can view the game's information
      * So that I can learn about the game<!-- Do this... -->
    * I can view the game's reviews
      * So that I can get an idea of the quality of the game.
  <!-- So I can.. -->
### Viewing Personal Library
* As a logged in user, I want to be able to view my lists of games that I've added and have the ability to remove them from those lists.
  * When I'm on the `/my-games` page:
    * I can see all the games in all of my lists
      * So that I can navigate to any of them easily
    * I can click on one of my lists
      * So that I can view all of the games that fall under that category.
    * I can click on a "delete" button to toggle selection of any of the games currently being displayed.
      * So that I can select and remove it from its respective list.
    * I can click on any game in my lists
      * So that I can be taken to that game's page (`/games/:id`).
### Reviewing A Game
* As a logged out user I can view user reviews on each game's page, but be redirected to the login if I try to write a review.
  * When I'm on any `/games/:id` page:
    * I can view other user's reviews.
      * So I can see why their opinion is wrong
    * I can click on a button to write a review
      * So that I can try to write a review but be redirected to log in.

* As a logged in user I can view user reviews on each game's page, as well as write a review and leave a rating.
  * When I'm on any `/games/:id` page:
    * I can view other user's reviews
      * So I can see why their opinion is wrong
    * I can click on a button to write a review
      * So that I can leave a written review and a rating.
    * I can click on a button to delete my review
      * So that I can hide the evidence.

### Modifying Game Status
* As a logged in user viewing an individual game's page, I want to be able to modify a game's status (want to play, playing, played) by adding it to my personal library with a drop-down menu.
  * When I'm on the `/my-games` or `/games/:id` pages:
    * I can click a drop-down button.
      * So I can add the game to the want to play, playing, or played lists.
