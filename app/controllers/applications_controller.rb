class ApplicationsController < ApplicationController
  before_action :set_job!
  def index
    @applications = @job.applications
  end

  def show
    @application = @job.applications.find(params[:id])
  end

  def create

  end

  private
  def set_job!
    @job = Job.find(params[:job_id])
  end
end
