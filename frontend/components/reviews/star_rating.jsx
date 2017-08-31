import React from 'react';
import createReactClass from 'create-react-class';

const Rating = createReactClass({
  getInitialState() {
    return {
      rating: this.props.rating || null,
      temp_rating: null
    };
  },
  rate(rating) {
    this.setState({
      rating: rating,
      temp_rating: rating
    });
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
  render() {
    var stars = [];
    
    for(var i = 0; i < 5; i++) {
      var klass = 'star-rating__star';
      
      if (this.state.rating >= i && this.state.rating != null) {
        klass += ' is-selected';
      }

      stars.push(
        <label key={"star_rating" + i}
          className={klass}
          >
          ★
        </label>
      );
    }
    
    return (
      <div className="star-rating">
        {stars}
      </div>
    );
  }
});

export default Rating 