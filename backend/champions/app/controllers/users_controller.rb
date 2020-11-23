class UsersController < ApplicationController
  # before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    @user = User.find_by(:id => params[:id])
    render json: @user
  end

  # POST /users
  def create
    if User.find_by(:name => user_params[:name])
      @user = User.find_by(:name => user_params[:name])
      redirect_to "/users/#{user.id}"
    else
      @user = User.create(user_params)
      @user.save!
      render json: @user
    end
  end


  private

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:name)
    end
end
