import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
    console.log(this.props);
    this.props.requestBook(this.props.match.params.BookId);
  }

  render() {
    // const focus = this.props.state.books.focus;
    // console.log(focus);
    console.log(this.props.book);
    console.log(this.props.author_id);
    return (
      <div className="book-show-component">
        <img className="book-show-cover" src={this.props.book.cover_img} alt={this.props.book.title}/>
        <div className="book-text">
          <h2>{this.props.book.title}</h2>
          <p>by {this.props.book.name}</p>
          <p>{this.props.book.blurb}</p>
        </div>
      </div>
    );
  }
}

export default BookShow;
