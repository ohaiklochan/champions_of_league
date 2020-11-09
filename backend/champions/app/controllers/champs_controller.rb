class ChampsController < ApplicationController
  def index
    @champs = Champ.all
    render json: @champs
  end

  def show
    @champ = Champ.find(params[:id])
  end
end
