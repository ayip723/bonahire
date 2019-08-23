json.extract! application, :id, :user_id, :job_id, :comment
# json.job application.job
# if show_job
# end

json.job do
  json.partial! '/jobs/job', job: application.job, show_company: true
end
