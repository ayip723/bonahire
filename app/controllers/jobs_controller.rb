class JobsController < ApplicationController
  # def index
  #   @jobs = jobs.all
  # end
  def show
    @job = Job.find(params[:id])
    @applied = !!(current_user && current_user.applications.find_by(job_id: params[:id]))
  end
end
