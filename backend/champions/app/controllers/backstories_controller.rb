class BackstoriesController < ApplicationController
  before_action :set_backstory, only: [:show, :update, :destroy]

  # GET /backstories
  def index
    @backstories = Backstory.all

    render json: @backstories
  end

  # GET /backstories/1
  def show
    render json: @backstory
  end

  # POST /backstories
  def create
    @backstory = Backstory.create(backstory_params)
    render json: @backstory
  end

  # # PATCH/PUT /backstories/1
  # def update
  #   if @backstory.update(backstory_params)
  #     render json: @backstory
  #   else
  #     render json: @backstory.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /backstories/1
  def destroy
    @backstory.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_backstory
      @backstory = Backstory.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def backstory_params
      params.require(:backstory).permit(:content, :champion)
    end
end
