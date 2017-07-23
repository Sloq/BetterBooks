class Api::BooksController < ApplicationController
  def index
    @books = Book.all
    render "/api/books/index"
  end

  def show
    @book = Book.find_by(id: params[:id])
    render "/api/books/show"
  end

  # def create
  #   @book = Book.new(book_params)
  #
  #   if @book.save
  #     render :show
  #   else
  #     render json: @book.errors.full_messages, status: 422
  #   end
  # end
  #
  # def update
  #   @book = Book.find(params[:id])
  #
  #   if @book.update(book_params)
  #     render :show
  #   else
  #     render json: @book.errors.full_messages, status: 422
  #   end
  # end

  private

  def book_params
    params.require(:book).permit(:title, :blurb, :cover_img, :author_id)
  end
end
