import React from 'react';
import { Link } from 'react-router-dom';

class BookshelfSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  newTypeForm() {

  }

  typeLIs() {
    const userId = this.props.userId;
    if (this.props.types) {
      return this.props.types.map(e => (
      <li key={e}>
        <Link to={`/users/${userId}/bookshelves/${e}`} >
          {e}
        </Link>
      </li>
    ));
    } else {
      return (<li></li>);
    }
  }


  render() {

    return (
      <div className="bookshelf-sidebar">
        <ul>
          {this.typeLIs()}
        </ul>
      </div>
    );
  }
}

export default BookshelfSidebar;
