# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
profile_pic     | string    | not null
password_digest | string    | not null(will have a default)
session_token   | string    | not null, indexed, unique

## books
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
blurb        | text      | not null
cover_img        | string      | not null(will have a default)
author_id   | integer   | not null, foreign key (references users), indexed


## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id   | integer   | not null, foreign key (references users), indexed
book_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
rating       | integer    | not null
description | text    |

## bookshelf
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id   | integer   | not null, foreign key (references users), indexed
book_id   | integer   | not null, foreign key (references users), indexed
read_status       | string    | not null


## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
book_id        | string    | not null

## authors
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name    | string   | not null, foreign key (references notes), indexed, unique [tag_id]
