class Api::ReviewsController < ApplicationController
  def create
    new_review = Review.new(user_id: current_user.id, book_id: params[:book_id], rating: params[:rating])
    @review = Book.find_by(id: params[:book_id]).reviews
    render "/api/reviews/index"
  end

  # def update
  # end

  # def show
  #   @review = Review.find_by(id: params[:id])
  # end

  def index
    current_book = Book.find_by(id: params[:book_id])
    @reviews = current_book.reviews
  end

end
