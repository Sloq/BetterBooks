import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Rating from './star_rating';
import RatingForm from './rating_form';


class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.bookId) {
      this.props.requestBookReviews(this.props.bookId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.bookId !== nextProps.bookId) {
      this.props.requestBookReviews(nextProps.bookId);
    }
    if (Object.keys(this.props.reviews).length !== Object.keys(nextProps.reviews).length) {
      this.props.requestBookReviews(nextProps.bookId);
    }
  }

  reviewList() {
    const reviews = this.props.reviews
    const review_keys = Object.keys(reviews).reverse()
    if (review_keys.length === 0) {
      return (
        <li className="review-item">
          Add a review and get the conversation going!
        </li>
      )
    } else {
      return review_keys.map(r_key => (
        this.reviewListItem(reviews[r_key])
      ))
    }
  }

  reviewListItem(review) {
    return (
      <li key={review.created_at} className="review-item">
        <img className="review-profile-pic" src={review.profile_pic} alt={review.username}/>
        <ul>
          <li className="review-description">
            {review.username} rated this book <Rating keyHelper={review.created_at} rating={review.rating} /> on {review.created_at.slice(0,10)}
          </li>
          <li>
            {review.body}
          </li>
        </ul>
      </li>
    )
  }

  reviewForm() {
    if (this.props.currentUser) {
      return (
        <ul>
          <RatingRadio rating={review.rating}/>
          <textarea/>
        </ul>
      )
    } else {
      return (
        <ul>
          <h2>Log In To Create A Review</h2>
        </ul>
      )
    }
  }

  isUser() {
    if (this.props.currentUser) {
      return this.props.currentUser.id;
    } else {
      return "none";
    }
  }

  
  render() {
    return (
      <div className="review-component">
        <ul className="review-list">
          <RatingForm createReview={this.props.createReview} bookId={this.props.bookId} userId={this.isUser()}/>
          <h2>Reviews</h2>
          {this.reviewList()}
        </ul>
      </div>
    )
  }
}

export default Reviews;
