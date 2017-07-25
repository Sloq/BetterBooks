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
    target_shelf_items = current_user.bookshelves.select do |shelve_book|
      p "+++++++++++==========================================++++++++++++"
      p shelve_book
      p shelve_book.book_id == params[:book_id].to_i

    end
    if target_shelf_items.empty?
      new_shelf_item = Bookshelf.new(book_id: params[:book_id], read_status: params[:read_status], shelf_type: "all", user_id: current_user.id)
      new_shelf_item.save!
    else
      target_shelf_items.each do |book|
        book.update_attributes!(read_status: params[:read_status])
      end
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

  def create
    new_shelf_type = Bookshelf.new(shelf_type: "all", user_id: current_user.id)
    new_shelf_type.save!
    @bookshelf = current_user.bookshelves
    render "/api/bookshelves/index"
  end
end
