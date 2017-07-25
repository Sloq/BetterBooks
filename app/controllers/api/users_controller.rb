class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.profile_pic = "http://res.cloudinary.com/cloudmccloud/image/upload/v1500498267/BetterBooks/003-book-2_iefo3g.png"
    if @user.save

      Bookshelf.create!(user_id: @user.id, shelf_type: "All")
      Bookshelf.create!(user_id: @user.id, shelf_type: "Read")
      Bookshelf.create!(user_id: @user.id, shelf_type: "Currently Reading")
      Bookshelf.create!(user_id: @user.id, shelf_type: "Want to Read")

      log_in(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

end
