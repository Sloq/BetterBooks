import React from 'react';
import { Link } from 'react-router-dom';

class BookshelfBook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { book } = this.props;
    const { title, cover_img, name, read_status, book_id } = book;
    return (
      <li key={book.id} className="bookshelf-li">
        <ul className="bookshelf-entry">
          <li>
            <Link to={`/books/${book_id}/`}>
              <img className='bookshelf-pic' src={cover_img} alt={title}/>
            </Link>
          </li>
          <li>
            <Link to={`/books/${book_id}/`}>
              {title}
            </Link>
          </li>
          <li>
            <Link to={`/authors/${name}/`}>
              {name}
            </Link>
          </li>
        </ul>
      </li>
    );
  }
}

export default BookshelfBook;
