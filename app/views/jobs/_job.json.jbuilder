json.extract! job, :id, :position, :description, :created_at, :updated_at
if show_company
  json.company job.company
end
