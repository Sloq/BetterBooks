class Api::BookshelvesController < ApplicationController
  def index
    user = User.find_by(id: params[:user_id])
    @bookshelves = user.bookshelves
  end

  def show
    user = User.find_by(id: params[:user_id])
    @shelf = user.bookshelves.where(shelf_name: params[:shelf_name]).shelvings
    # use this method show because we know id
    # click on a shelf name (not all/read/ect) use this
  end

  def create
    new_shelf = Bookshelf.new(user_id: current_user.id, shelf_name: params[:shelf_name])
    if new_shelf.save!
      @shelves = current_user.bookshelves
      render "/api/bookshelves/index"
    else
      render json: @shelf.errors.full_messages, status: 422
    end
  end

  def destroy
    shelf = current_user.bookshelves.find_by(shelf_name: params[:shelf_name])

    # .where.not(shelf_name: ['All', 'Read', 'Currently Reading', 'Want To Read'])

    shelf.destroy!
    @shelves = current_user.bookshelves
    render "/api/bookshelves/index"
  end

end
