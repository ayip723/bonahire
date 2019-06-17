json.extract! company, :id, :name, :description, :created_at, :updated_at
if show_jobs
  json.jobs(company.jobs)
else
  json.jobs([])
end
