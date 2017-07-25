import React from 'react';
import { Link } from 'react-router-dom';

class BookIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { book } = this.props;
    const { title, cover_img, author_id } = book;

    return (
      <li key={book.id} className="BookMainIndexItem">
        <Link to={`/books/${book.id}/`} >
          <div className='main-book-hold-div'>
          <img className='book-index-pic' src={cover_img} alt={title}/>
          </div>
          <div className="book-main-description">
            {title.slice(0, 20)}
          </div>
        </Link>
      </li>
    );
  }
}

export default BookIndexItem;
