// export const fetchUserReviews = bookId => (
//     $.ajax({
//       method: 'GET',
//       url: `/api/books/${bookId}`,
//       data: { bookId }
//     })
//   );
  
  export const fetchBookReviews = bookId => (
    $.ajax({
      method: 'GET',
      url: `/api/books/${bookId}/reviews`,
    })
  );
  
  export const postBookReview = (book_id, user_id, rating, body) => (
    $.ajax({
      method: 'POST',
      url: `/api/books/${book_id}/reviews`,
      data: { user_id, rating, body }
    })
  );