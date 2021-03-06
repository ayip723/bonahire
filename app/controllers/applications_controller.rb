class ApplicationsController < ApplicationController
  before_action :set_job!, only: [:index, :show]
  def index
    # First need to make sure that this is a company admin.
    @applications = @job.applications
  end

  def show
    @application = @job.applications.find(params[:id])
  end

  def my_applications
    @applications = current_user.applications.includes(job: :company)
    render :index
  end

  def create
    @application = current_user.applications.new(application_params)

    if @application.save
      render :show
    else
      render json: @application, status: :unprocessable_entity
    end
  end

  private
  def set_job!
    @job = Job.find(params[:job_id])
  end

  def application_params
    params.require(:application).permit(:job_id, :comment)
  end
end
