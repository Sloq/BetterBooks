# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Books

- `GET /api/books`
  - books index/search
  - accepts `tag_name` query param to list books by tag
- `POST /api/books`
- `GET /api/books/:id`
- `PATCH /api/books/:id`
- `DELETE /api/books/:id`
  - not available to users

### Bookshelf

- `GET /api/bookshelf/:id`
  - accepts `read_status` query param to list books by status
- `GET /api/books/:id`
- `PATCH /api/bookshelf/:id` change books read_status
- `DELETE /api/bookshelf/:id`
  - remove book from 'read_status' and user bookshelf

### Reviews

- `GET /api/reviews`
- `POST /api/reviews`
- `GET /api/reviews/:id`
- `DELETE /api/reviews/:id`

### Tags

- A book's tags will be included in the book show template
- `GET /api/tags`
- `POST /api/books/:id/tags`: add tag to book by name
  - if book doesn't already exist, it will be created
- `DELETE /api/books/:id/tags/:tag_name`: remove tag from book by
  name
