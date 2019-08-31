# json.application @application
# json.extract! @application, :id, :job_id

json.application do
  json.partial! 'application', application: @application, show_job: true
end
