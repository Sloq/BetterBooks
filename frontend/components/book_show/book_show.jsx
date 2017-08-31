import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReadStatusContainer from '../read_status/read_status_container';
import ReviewContainer from '../reviews/reviews_container';

class BookShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.BookId !== nextProps.match.params.BookId) {
      this.props.requestBook(nextProps.match.params.BookId);
    }
  }

  componentDidMount() {
    this.props.requestBook(this.props.match.params.BookId);
  }

  render() {
    return (
      <div className="book-show-component">
        <div className="book-show-component-top">
          <div className="book-show-left">
            <img className="book-show-cover" src={this.props.book.cover_img} alt={this.props.book.title}/>
            <div className="book-text">
              <h2>{this.props.book.title}</h2>
              <p>by</p> <h3>{this.props.book.name}</h3>
              <p>{this.props.book.blurb}</p>
            </div>
          </div>
          <ReadStatusContainer/>
        </div>
        <ReviewContainer/>
      </div>
    );
  }
}

export default BookShow;
