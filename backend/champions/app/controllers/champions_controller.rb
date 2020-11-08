class ChampionsController < ApplicationController

  # GET /champions
  def index
    @champions = Champion.all

    render json: @champions
  end

  # GET /champions/1
  def show
    @champion = Champion.find(params[:id])
    render json: @champion
  end

end
