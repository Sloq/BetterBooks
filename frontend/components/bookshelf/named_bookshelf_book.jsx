import React from 'react';
import { Link } from 'react-router-dom';

class NamedShelfBook extends React.Component {
  constructor(props) {
    super(props);
    this.removeBook = this.removeBook.bind(this);
  }

  removeBook() {
    this.props.deleteShelving(this.props.book.id, this.props.shelfId);
    // this.props.requestNamedBookshelf(this.props.userId, this.prop.shelfName);
  }

  render() {
    const { book, shelfId } = this.props;
    const { title, cover_img, name, id, read_status } = book;
    return (
      <li key={id} className="bookshelf-li">
        <ul className="bookshelf-entry">
          <li>
            <Link to={`/books/${id}/`}>
              <img className='bookshelf-pic' src={cover_img} alt={title}/>
            </Link>
          </li>
          <li>
            <Link to={`/books/${id}/`}>
              {title}
            </Link>
          </li>
          <li>
            {name}
          </li>
          <li>
            <button className="delete-from-bookshelf" onClick={this.removeBook}>x</button>
          </li>
        </ul>
      </li>
    );
  }
}

export default NamedShelfBook;
