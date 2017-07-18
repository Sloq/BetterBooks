```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createReview: {errors: ["body can't be blank"]}
    createBook: {errors: ["body/title/author can't be blank"]}
  },
  books: {
    1: {
      title: "Sample State",
      blurb: "is useful to plan",
      author_id: 1,
      tags: [1, 2, 6, 21]
    }
  },
  bookshelf: {
    1: {
      user_id: 1,
      books: {1: {
        book_id: 1,
        read_status: read
      }
    }
  },
  reviews: {
    1: {
      title: "Redux",
      author_id: 1,
      book_id: 1,
      description: "is cool"
    }
  }
  tags: {
    1: {
      tag_id: 1,
      tag_name: classics
    }
  }
}
```
