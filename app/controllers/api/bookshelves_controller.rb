class Api::BookshelvesController < ApplicationController
  def index
    user = User.find(params[:user_id])
    @bookshelf = user.bookshelves
  end

  def show
    user = User.find(params[:user_id])
    @bookshelf = user.bookshelves.select do |bookshelf|
      bookshelf.shelf_type == params[:type]
    end
  end

  def update
    users_shelves = current_user.bookshelves
    target_books = users_shelves.select do |shelve_book|
      shelve_book.book_id == params[:book_id]
    end
    if target_books.empty?
      new_shelf_item = Bookshelf.new(book_id: params[:book_id], read_status: params[:readStatus], shelf_type: "all", user_id: current_user.id)
      new_shelf_item.save!
      @bookshelf = new_shelf_item
    else
      target_books.each do |book|
        book.read_status = params[:readStatus]
        book.save!
      end
      @bookshelf = target_books.first
    end


    @bookshelf = current_user.bookshelves
    render "/api/bookshelves/index"
  end

  def destroy
    users_shelves = current_user.bookshelves
    target_shelf = users_shelves.select do |shelve_book|
      shelve_book.shelf_type == params[:type]
    end
    target_shelf.each(&:destroy)
    # not sure what to render
    @bookshelf = current_user.bookshelves
    render "/api/bookshelves/index"
  end
end
