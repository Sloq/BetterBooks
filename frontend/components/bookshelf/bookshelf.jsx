import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BookshelfBook from './bookshelf_book';
// import BookshelfSidebar from './bookshelf_sidebar';

class Bookshelf extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.match.params);
    // this.props.requestNamedBookshelf(this.props.match.params.shelfName
    // , this.props.match.params.userId);
    this.props.requestShelvings(this.props.match.params.user_id, "ALL");
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestShelvings(nextProps.match.params.userId);
    }
  }

  userBooksUL() {
    console.log("fuuuuuu");
    console.log(this.props.shelvings);
    const books = this.props.shelvings;
    if (books[0]) {
      return books.map(book =>
        <BookshelfBook
          book={book}
        />
      );
    } else {
      return (<div></div>);
    }
  }

  // <BookshelfSidebar className="bookshelves-sidebar" types={this.props.types} userId={userId}/>

  render() {
    // console.log(this.props.match.params.userId);
    // console.log("allprops-vv");
    // console.log(this.props);
    // console.log("allprops-^^");
    const userId = this.props.match.params.userId;
    return (
      <div className="user_books">
        <ul className="users-all-bookshelf">
          {this.userBooksUL()}
        </ul>
      </div>
    );
  }
}

export default Bookshelf;
