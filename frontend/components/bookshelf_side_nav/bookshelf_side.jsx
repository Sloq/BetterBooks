import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import CreateShelf from './create_shelf';

class BookshelfSide extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.props.requestAllBookshelves(this.props.match.params.user_id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.user_id !== nextProps.match.params.user_id) {
      this.props.requestAllBookshelves(nextProps.match.params.user_id);
    }
    if (this.props.shelfNames.length !== nextProps.shelfNames.length) {
      this.props.requestAllBookshelves(nextProps.match.params.user_id);
    }
  }

  handleDelete(shelfName) {
    this.props.deleteBookshelf(shelfName, this.props.currentUser)
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
        newShelfArray.push(<li key={shelf.shelfId} className="personal-shelf-li">
          <NavLink to={`/user/${id}/bookshelf/${shelf.shelfName}`} activeClassName="activeShelf">
            {shelf.shelfName}
          </NavLink>
          
          <button className="remove-shelve" onClick ={() => this.handleDelete(shelf.shelfName)}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
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
          <NavLink to={`/user/${id}/bookshelf/all`} activeClassName="activeShelf">
            All
          </NavLink>
          <NavLink to={`/user/${id}/bookshelf/read`} activeClassName="activeShelf">
            Read
          </NavLink>
          <NavLink to={`/user/${id}/bookshelf/currently_reading`} activeClassName="activeShelf">
            Currently Reading
          </NavLink>
          <NavLink to={`/user/${id}/bookshelf/want_to_read`} activeClassName="activeShelf">
            Want to Read
          </NavLink>
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
