import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BookshelfBook from './bookshelf_book';
import BookshelfSidebar from './bookshelf_sidebar';

class AllBookshelf extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllBookshelves(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestAllBookshelves(nextProps.match.params.userId);
    }
  }

  userBooksUL() {
    const books = this.props.allUserBooks;
    // console.log(userId);
    // console.log(this.props.match.params);
    return books.map(book => {
      return (
      <BookshelfBook
        book={book}
      />
    );
  });
  }

  render() {
    // console.log(this.props.match.params.userId);
    // console.log("allprops-vv");
    // console.log(this.props);
    // console.log("allprops-^^");
    const userId = this.props.match.params.userId;
    return (
      <div className="user_books">
        <BookshelfSidebar className="bookshelves-sidebar" types={this.props.types} userId={userId}/>
        <ul className="users-all-bookshelf">
          {this.userBooksUL()}
        </ul>
      </div>
    );
  }
}

export default AllBookshelf;
