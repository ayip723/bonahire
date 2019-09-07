class MovingsController < ApplicationController
  before_action :set_application!
  def index
    @stages = @application.job.stages
    @movings = @application.movings
  end

  private
  def set_application!
    @application = Application.find(params[:application_id])
  end
end
