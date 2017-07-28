import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import CreateShelf from './create_shelf';

class BookshelfSide extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllBookshelves(this.props.match.params.user_id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.user_id !== nextProps.match.params.user_id) {
      this.props.requestAllBookshelves(nextProps.match.params.user_id);
    }
  }
  shelvesUl() {
    const id = this.props.match.params.user_id;
    const shelfies = this.props.shelfNames;
    const newShelfArray = [];
    if (shelfies[0]) {
      shelfies.forEach(shelf => {
        if (shelf.shelfName === "Default") {
          return;
        }
        newShelfArray.push(<li key={shelf.shelfId}>
          <Link to={`/user/${id}/bookshelf/${shelf.shelfName}`}>
            {shelf.shelfName}
          </Link>
        </li>);
      }
    );
    return newShelfArray;
    } else {
      return <div></div>;
    }
  }

  shelfCreateOrNot() {
    if (this.props.currentUser.id == this.props.match.params.user_id) {
      return (<CreateShelf
        shelfNames={this.props.shelfNames}
        createBookshelf={this.props.createBookshelf}
        currentUserId={this.props.currentUserId}
         />);
    } else {
      return (
        <div></div>
      );
    }
  }


  render() {
    const id = this.props.match.params.user_id;
    return (
      <div className="bookshelf-nav">
        <h2>Bookshelves</h2>
        <ul className="default-shelves">
          <Link to={`/user/${id}/bookshelf/all`} >
            All
          </Link>
          <Link to={`/user/${id}/bookshelf/read`} activeStyle={{ color: 'red' }}>
            Read
          </Link>
          <Link to={`/user/${id}/bookshelf/currently_reading`} >
            Currently Reading
          </Link>
          <Link to={`/user/${id}/bookshelf/want_to_read`} >
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

export default BookshelfSide;
