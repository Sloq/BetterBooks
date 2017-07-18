## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - header

**BookshelfContainer**
 - Header
  * BookTile

**BookDetails**
 - BookDetails
  + Review display and create

**SearchResultsContainer**
 - Search
 - BookIndex

**TagContainer**
 - Header
  + NoteIndex

**TagsSearch**
 + AutoSearch
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "homepage" |
| "/home/bookshelf" | "BookshelfContainer" |
| "/book/:id" | "BookContainer" |
| "/home/tag/:tagId/note/:notedId" | "TagContainer" |
| "/signed-out" | "signedOut"
| "/book/:id" | "Book_view" |
| "/search" | "Search" |
| "/new-book" | "NewBook" |
| "/new-tag" | "NewTag" |
