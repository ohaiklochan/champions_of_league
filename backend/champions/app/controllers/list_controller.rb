class ListController < ApplicationController

  def index
    @list=List.all
    render json: @list
  end

  def show
    @list = List.find(params[:id])
    render json: @list 
  end

  def create
    @champions = Champion.find(params[:champion_id])
    @list = List.create(list_params)
    @champions.list_id = @list.id
    @list.champions << @champions
    if @list.valid?
      render json: @list
    else
      render json: {errors: @list.errors.full_messages}
    end
  end

  def update
    @current_list = List.find(params[:id])
    champions = @current_list.champions
    @current_list.champions << champions
    @current_list.update(name: params[:name])
    render json: @current_list
  end

  def destroy
    @current_list = List.find(params[:id])
    champions = @current_list.champions
    @current_list.champions.delete(champions)
    @current_list.destroy
  end

  private
    def list_params
       params.permit(:name, :id, :user_id, :champions) 
    end
end
