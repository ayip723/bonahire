class MovingsController < ApplicationController
  before_action :set_application!
  def index
    @stages = @application.job.stages
    @movings = @application.movings
  end

  def create
    @moving = @application.movings.new(moving_params)
    if @moving.save
      render :show
    else
      render json: @moving, status: :unprocessable_entity
    end
  end

  private
  def set_application!
    @application = Application.find(params[:application_id])
  end

  def moving_params
    params.require(:moving).permit(:stage_id, :application_id, :comment)
  end
end
