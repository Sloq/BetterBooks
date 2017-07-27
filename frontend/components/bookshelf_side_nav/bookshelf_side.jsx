import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CreateShelf from './create_shelf';

class BookshelfSide extends React.Component {
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

  shelvesUl() {
    // add a delete button action deleteBookshelf
    if (this.props.shelfNames[0]) {
      return (
      this.props.shelfNames.map(shelf => (
        <li>
          <Link to={`/user/${this.props.match.params.userId}/bookshelf/${shelf}`}>
            {shelf}
          </Link>
        </li>
      )));
    } else {
      return <div></div>;
    }
  }

  shelfCreateOrNot() {
    if (this.props.currentUserId === this.props.match.params.userId) {
      return CreateShelf();
    } else {
      return (
        <div></div>
      );
    }
  }


  render() {
    const url = this.props.match.url;
    return (
      <div className="bookshelf-nav">
        Bookshelves
        <ul className="default-shelves">
          <Link to={`${url}`} >
            All
          </Link>
          <Link to={`${url}/read`} >
            Read
          </Link>
          <Link to={`${url}/reading`} >
            Currently Reading
          </Link>
          <Link to={`${url}/to_read`} >
            Want to Read
          </Link>
        </ul>
        <ul className="user-created-shelves">
          {this.shelvesUl()}
        </ul>
        {this.shelfCreateOrNot()}
      </div>
    );
  }
}
