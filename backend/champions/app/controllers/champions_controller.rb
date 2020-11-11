class ChampionsController < ApplicationController
  before_action :set_champion, only: [:show, :update, :destroy]

  # GET /champions
  def index
    @champions = Champion.all

    render json: @champions
  end

  # GET /champions/1
  def show
    render json: @champion
  end

  # POST /champions
  def create
    @champion = Champion.create(
      name: params[:name],
      title: params[:title],
      image: params[:image]
    )
    render json: @champion
  end

  # PATCH/PUT /champions/1
  def update
    if @champion.update(champion_params)
      render json: @champion
    else
      render json: @champion.errors, status: :unprocessable_entity
    end
  end

  # DELETE /champions/1
  def destroy
    @champion.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_champion
      @champion = Champion.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def champion_params
      params.require(:champion).permit(:name, :type, :image)
    end
end
