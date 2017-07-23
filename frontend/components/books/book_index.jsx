import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllBooks();
  }

  booksUL() {
    const books = this.props.books;
    return books.map(book => (
      <BookIndexItem
        key={book.id}
        book={book}
      />
    ));
  }

  render() {
    return (
      <ul className="main-all-books">
        {this.booksUL()}
      </ul>
    );
  }
}

export default BookIndex;
