json.extract! application, :id, :user_id, :job_id, :comment
json.user do
  json.extract! application.user, :id, :email
end
# json.job application.job
# if show_job
# end

if show_job
  json.job do
    json.partial! '/jobs/job', job: application.job, show_company: true
  end
end
