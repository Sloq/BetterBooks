class Api::ShelvingsController < ApplicationController
  def show
    @shelvings = current_user.shelvings.where(book_id: params[:book_id])
  end

  def index
    # use index because we have to look through everything and filter it isnt a particular row
    user = User.find_by(id: params[:userId])
    current_shelvings = user.shelvings
    if params[:readStatus] == "read"
      @shelvings = current_shelvings.select('distinct on (book_id) *').where(read_status: "Read")
    elsif params[:readStatus] == "want_to_read"
      @shelvings = current_shelvings.select('distinct on (book_id) *').where(read_status: "Want to Read")
    elsif params[:readStatus] == "currently_reading"
      @shelvings = current_shelvings.select('distinct on (book_id) *').where(read_status: "Currently Reading")
    else
      shelvings = current_shelvings.select('distinct on (book_id) *')
      @shelvings = shelvings
    end
    @shelvings
  end

  def create
    if params[:bookshelfId] == "NO_ID"
      shelf_id = current_user.bookshelves.find_by(shelf_name: "Default").id
    else
      shelf_id = params[:bookshelfId]
    end
    new_shelving = Shelving.new(
      book_id: params[:book_id],
      bookshelf_id: shelf_id,
      read_status: params[:readStatus]
    )
    if new_shelving.save!
      all_shelf_shelving = current_user.shelvings.where(book_id: params[:book_id])
      @shelvings = all_shelf_shelving
      render "/api/shelvings/show"
    else
      render json: @shelving.errors.full_messages, status: 422
    end
  end

  def destroy
    shelf_name = current_user.shelvings.find_by(id: params[:id]).bookshelf.shelf_name
    shelving = current_user.shelvings.find_by(id: params[:id])
    shelving.destroy!
    p "============="
    p current_user.id
    p shelf_name
    p "============="
    render json: {shelfName: shelf_name, userId: current_user.id}, status: 200
  end

  def update
    shelvings_to_update = current_user.shelvings.where(book_id: params[:book_id])
    shelvings_to_update.update_all(read_status: params[:read_status])
    @shelvings = shelvings_to_update
    render "/api/shelvings/show"
  end

end
