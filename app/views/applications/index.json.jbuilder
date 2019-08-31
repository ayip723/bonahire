# json.array! @applications
# json.applications @applications

@applications.each do |application|
  json.applications do
    json.set! application.id do
      json.partial! 'application', application: application, show_job: false
    end
  end
end

json.job do
  json.partial! 'jobs/job', job: @job, show_company: false
  json.applicationIds @job.applications.pluck(:id)
end
