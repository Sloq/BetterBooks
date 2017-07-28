import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReadStatusContainer from '../read_status/read_status_container';

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
        <img className="book-show-cover" src={this.props.book.cover_img} alt={this.props.book.title}/>
        <div className="book-text">
          <h2>{this.props.book.title}</h2>
          <p>by {this.props.book.name}</p>
          <p>{this.props.book.blurb}</p>
        </div>
        <ReadStatusContainer/>
      </div>
    );
  }
}

export default BookShow;
