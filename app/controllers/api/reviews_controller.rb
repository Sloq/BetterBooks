class Api::ReviewsController < ApplicationController
  def create
    new_review = Review.new(user_id: current_user.id, book_id: params[:book_id], rating: params[:rating])
    @review = Book.find_by(id: params[:book_id]).reviews
    render "/api/reviews/index"
  end

  # def update
  # end

  def index
    current_book = Book.find_by(id: params[:book_id])
    @reviews = current_book.reviews
  end

  # show all the reviews for given user after if ever impliment user profile
  def show
  end

  def create
    new_review = Review.new(
      book_id: params[:book_id],
      user_id: params[:user_id],
      rating:  params[:rating],
      body:    params[:body]
    )
    if new_review.save!
      @reviews = current_user.reviews.where(book_id: params[:book_id])
      render "/api/reviews/index"
    else
      render json: new_review.errors.full_messages, status: 422
    end
  end

end
