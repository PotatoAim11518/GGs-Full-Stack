# **Database Schema**

## `users`

| column name | data type | details                   |
|-------------|-----------|---------------------------|
| id          | integer   | not null, primary key     |
| username    | string    | not null, unique          |
| firstName   | string    | not null                  |
| lastName    | string    | not null                  |
| email       | string    | not null, unique          |
| password    | string    | not null                  |
| created_at  | datetime  | not null                  |
| updated-at  | datetime  | not null                  |

## `usersGames`

| column name | data type | details                       |
|-------------|-----------|-------------------------------|
| id          | integer   | not null, primary key         |
| gameId      | integer   | not null, unique, foreign key |
| reviewId    | integer   | foreign key                   |
| userId      | integer   | not null, foreign key         |
| created_at  | datetime  | not null                      |
| updated-at  | datetime  | not null                      |

* `gameId` references `games` table
* `reviewId` references `reviews` table
* `userId` references `users` table

## `games`

| column name   | data type | details               |
|---------------|-----------|-----------------------|
| id            | integer   | not null, primary key |
| name          | string    | not null, unique      |
| description   | text      | not null              |
| genreId       | integer   | foreign key           |
| publisherId   | integer   | foreign key           |
| platforms     | text      | not null              |
| releaseDate   | date      | not null              |
| created_at    | datetime  | not null              |
| updated-at    | datetime  | not null              |

* `genreId` references `genres` table
* `publisherId` references `publishers` table
* `platformId` references `platforms` table

## `reviews`

| column name   | data type   | details               |
|---------------|-------------|-----------------------|
| id            | integer     | not null, primary key |
| userId        | integer     | not null, foreign key |
| content       | text        | not null              |
| rating        | number(2,1) | default: null         |
| created_at    | datetime    | not null              |
| updated-at    | datetime    | not null              |

* `userId` references `users` table

## `genres`

| column name   | data type   | details               |
|---------------|-------------|-----------------------|
| id            | integer     | not null, primary key |
| genreName     | string      | not null, unique      |
| created_at    | datetime    | not null              |
| updated-at    | datetime    | not null              |

## `publishers`

| column name   | data type   | details               |
|---------------|-------------|-----------------------|
| id            | integer     | not null, primary key |
| publisherName | string      | not null, unique      |
| created_at    | datetime    | not null              |
| updated-at    | datetime    | not null              |
