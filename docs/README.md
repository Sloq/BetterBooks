# BetterBooks

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://betterbooks.herokuapp.com/
[trello]: https://trello.com/b/NyYc8Gxh/betterbooks

## Minimum Viable Product

BetterBooks is a web application inspired by GoodReads built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Books
- [ ] Bookshelves
- [ ] Reviews
- [ ] Read Status (will read, have read, etc.)
- [ ] Bonus: Search across multiple models
- [ ] Bonus: Tags
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Book Model, API, and components (3 days)

**Objective:** Books can be created, read, edited and destroyed through
the API.

### Phase 3: Bookshelves (2 day)

**Objective:** Books the user has read belong on users bookshelf, user can visit other users bookshelves.

### Phase 4: Reviews (2 days)

**Objective:** Reviews belong to Books that can be created, read, edited and destroyed through the API.

### Phase 5: Read status (1 day)

**Objective:** Books can be marked as read, want to read, or currently reading.


### Bonus Features (TBD)
- [ ] Bonus: Search for books
- [ ] Bonus: Tags
**Objective:** Books can be tagged with multiple tags, and tags are searchable.
