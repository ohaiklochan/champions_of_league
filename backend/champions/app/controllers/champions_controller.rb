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
    render json: @champion
  end

  def update
    @champion = Champion.find(params[:id])
    @champion.update(champion_params)
    render json: @champion
  end

  # DELETE /champions/1
  def destroy
    @champion = Champion.find(params[:id])
    @champion.delete
    render json: {championId: @backstory.id}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_champion
      @champion = Champion.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def champion_params
      params.require(:champion).permit(:name, :title, :image, :tags)
    end
end
