class Api::BookshelvesController < ApplicationController
  def show
    @bookshelf = Bookshelf.find_by(user_id: params[:user_id])
    render "/api/bookshelf/show"
  end
end
