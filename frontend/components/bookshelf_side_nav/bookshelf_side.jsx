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
    if (this.props.shelfNames[0]) {
      return (
      this.props.shelfNames.map(name => (
        <li key={Object.keys(name)}>
          <Link to={`/user/${id}/bookshelf/${Object.values(name)[0]}`}>
            {Object.values(name)[0]}
          </Link>
        </li>
      )));
    } else {
      return <div></div>;
    }
  }

  shelfCreateOrNot() {
    if (this.props.currentUser.id === this.props.match.params.user_id) {
      return CreateShelf();
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
        Bookshelves
        <ul className="default-shelves">
          <Link to={`/user/${id}/bookshelf/all`} >
            All
          </Link>
          <Link to={`/user/${id}/bookshelf/read`} >
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
