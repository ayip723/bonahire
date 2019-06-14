class JobsController < ApplicationController
  # def index
  #   @jobs = jobs.all
  # end
  def show
    @job = Job.find(params[:id])
  end
end
