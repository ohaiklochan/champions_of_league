class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def login
    @error = flash[:error]
  end

  def handle_login

    @user=User.find_by(username: params[:username])
    if @user
      render json: @user
    else
      render json: {errors: @user.errors.full_messages}
    end

  end

  def logout
    session[:user_id] = nil
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.valid?
      session[:user_id] = @user.id
      render json: @user
    else
      render json: {errors: @user.errors.full_messages}
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :username)
    end
end
