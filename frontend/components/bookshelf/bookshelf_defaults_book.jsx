import React from 'react';
import { Link } from 'react-router-dom';

class BookshelfBook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { book } = this.props;
    const { title, cover_img, name, read_status, id } = book[1];
    return (
      <li key={book[0]} className="bookshelf-li">
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
        </ul>
      </li>
    );
  }
}

export default BookshelfBook;
