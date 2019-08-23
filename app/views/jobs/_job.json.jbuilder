json.extract! job, :id, :position, :description
if show_company
  json.company do
    json.partial! "companies/company", company: job.company
  end
end
