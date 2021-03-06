# json.array! @applications
# json.applications @applications

@applications.each do |application|
  json.applications do
    json.set! application.id do
      json.partial! 'application', application: application, show_job: false
      json.stages []
    end
  end
end

json.job do
  json.partial! 'jobs/job', job: @job, show_company: false, show_application_ids: true
end
