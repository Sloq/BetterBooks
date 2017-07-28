class Api::BooksController < ApplicationController
  def index
    @books = Book.all
    render "/api/books/index"
  end

  def show
    @book = Book.find_by(id: params[:id])
    render "/api/books/show"
  end

  private

  def book_params
    params.require(:book).permit(:title, :blurb, :cover_img, :author_id)
  end
end
