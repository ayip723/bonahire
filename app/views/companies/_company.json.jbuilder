json.extract! company, :id, :name, :description, :created_at, :updated_at
json.jobs(company.jobs)
