class Api::BookshelvesController < ApplicationController
  def index
    user = User.find_by(id: params[:user_id])
    @shelvings = user.bookshelves.select("DISTINCT shelf_type")
  end

  def show
    user = User.find_by(id: params[:user_id])
    @shelf = user.bookshelves.where(shelf_type: params[:shelf_type]).shelvings
  end

  def create
    new_shelf = Bookshelf.new(user_id: current_user.id, shelf_type: params[:shelf_type])
    if new_shelf.save!
      @shelves = current_user.bookshelves
      render "/api/bookshelves/index"
    else
      render json: @shelf.errors.full_messages, status: 422
    end
  end

  def destroy
    shelf = current_user.bookshelves.find_by(shelf_type: params[:shelf_type]).where.not(shelf_type: ['All', 'Read', 'Currently Reading', 'Want To Read'])

    # shelf.shelvings.destroy_all!

    shelf.destroy!
    @shelves = current_user.bookshelves
    render "/api/bookshelves/index"
  end

end
