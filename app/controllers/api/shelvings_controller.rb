class Api::ShelvingsController < ApplicationController

  def show
    # @shelving = Shelving.find_by(id: params[:id])
    @shelving = current_user.shelvings.find_by(book_id: params[:book_id])
  end

  def index
    user = user.find_by(id: params[:user_id])
    @shelvings = user.shelvings.where(read_status: params[:read_status])
  end

  def create
    new_shelving = Shelving.new(
      book_id: params[:book_id],
      bookshelf_id: params[:bookshelf_id],
      read_status: params[:read_status]
    )
    if new_shelving.save!
      all_shelf_shelving = current_user.bookshelves.where(shelf_type: "all").shelvings.where(book_id: params[:book_id])

      if !all_shelf_shelving
        Shelving.create!(
          book_id: params[:book_id],
          bookshelf_id: current_user.bookshelves.find_by(shelf_type: "all"),
          read_status: params[:read_status]
        )
      end

      @shelving = new_shelving
      render "/api/shelvings/show"
    else
      render json: @shelving.errors.full_messages, status: 422
    end
  end

  def destroy
    shelving = current_user.shelvings.find_by(id: params[:id])
    shelving.destroy!
    @shelving = shelving
    render json: {}
  end

  def update
    shelvings_to_update = current_user.shelvings.where(book_id: params[:book_id])
    shelvings_to_update.update_all(read_status: params[:read_status])
    @shelving = shelvings_to_update.first
    render "/api/shelvings/show"
  end

end
