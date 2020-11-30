class ChampionsController < ApplicationController
  before_action :set_champion, only: [:show, :update, :destroy]

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

  # POST /champions
  def create
    @champion = Champion.create(champion_params)
    @champion.save!
    render json: @champion
  end

  # DELETE /champions/1
  def destroy
    @champion = Champion.find_by(:id => params[:id]).destroy
    render json: @champion
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_champion
      @champion = Champion.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def champion_params
      params.require(:champion).permit(:name, :title, :image, :tags, :user_id)
    end
end
