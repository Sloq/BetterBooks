import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BookshelfBook from './bookshelf_defaults_book';
import NamedShelfBook from './named_bookshelf_book';
import BookshelfSideContainer from '../bookshelf_side_nav/bookshelf_side_container';
// import BookshelfSidebar from './bookshelf_sidebar';

class Bookshelf extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestShelvings(this.props.match.params.user_id, this.props.match.params.shelf_name);
    console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const oldUser = this.props.match.params.user_id;
    const newUser = nextProps.match.params.user_id;
    const oldShelfName = this.props.match.params.shelf_name;
    const newShelfName = nextProps.match.params.shelf_name;
    if (oldUser !== newUser) {
      this.props.requestShelvings(newUser, newShelfName);
    }
    if (oldShelfName !== newShelfName) {
      if (["all", "read", "want_to_read", "currently_reading"].includes(newShelfName)) {
        this.props.requestShelvings(newUser, newShelfName);
      } else {
        this.props.requestNamedBookshelf(newShelfName, newUser);
      }
    }
  }

  userBooksUL() {
    let books;
    if (["all", "read", "want_to_read", "currently_reading"].includes(this.props.match.params.shelf_name)) {
      books = this.props.shelvings;
      if (books[0]) {
        return books.map(book =>
          <BookshelfBook
            book={book}
          />
        );
      }
    } else {
      books = this.props.viewingShelf;
      if (Object.keys(books).length !== 0) {
        return Object.keys(books).map(id =>
          <NamedShelfBook
            deleteShelving={this.props.deleteShelving}
            shelfId={id}
            book={books[id]}
            shelfName={this.props.match.params.shelf_name}
            userId={this.props.match.params.user_id}
          />
        );
      } else {
        return (<div></div>);
      }
    }
  }

  render() {
    const user_id = this.props.match.params.user_id;
    return (
      <div className="user_bookshelf">
        <BookshelfSideContainer match={this.props.match}/>
        <ul className="users-own-bookshelves">
          {this.userBooksUL()}
        </ul>
      </div>
    );
  }
}

export default Bookshelf;
