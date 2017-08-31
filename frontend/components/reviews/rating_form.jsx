import React from 'react';
import createReactClass from 'create-react-class';

const RatingForm = createReactClass({
  getInitialState() {
    return {
      rating: null,
      temp_rating: null,
      body: ''
    };
  },
  rate(rating) {
    this.setState({
      rating: rating,
      temp_rating: rating,
    });
  },
  writeReview(e) {
    this.setState({
      body: e.target.value
    })
  },
  star_over(rating) {
    this.state.temp_rating = this.state.rating;
    this.state.rating = rating;
    
    this.setState({
      rating: this.state.rating,
      temp_rating: this.state.temp_rating
    });
  },
  star_out() {
    this.state.rating = this.state.temp_rating;
    
    this.setState({ rating: this.state.rating });
  },
  handleSubmit() {
    this.props.createReview(this.props.bookId, this.props.userId, this.state.rating, this.state.body)
    this.setState({
      rating: null,
      temp_rating: null,
      body: ''
    });
  },
  render() {
    var stars = [];
    
    for(var i = 0; i < 5; i++) {
      var klass = 'star-rating_radio';
      
      if (this.state.rating >= i && this.state.rating != null) {
        klass += ' is-selected';
      }

      stars.push(
        <label
          key={"star" + i}
          className={klass}
          onClick={this.rate.bind(this, i)}
          onMouseOver={this.star_over.bind(this, i)}
          onMouseOut={this.star_out}>
          ★
        </label>
      );
    }
    if (this.props.userId === "none") {
      return (
        <ul className="rating-form">
          <h2>Log in to create a review!</h2>
        </ul>
      )
    } else {
      return (
        <ul className="rating-form">
          <h2>Write A Review</h2>
          <div className="star-rating">
            {stars}
          </div>
          <textarea onChange={this.writeReview} name='body'
            value={this.state.body}></textarea>
          <button onClick={this.handleSubmit}>Submit</button>
        </ul>
      );
    }
  }
});

export default RatingForm