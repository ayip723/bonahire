json.company do
  json.partial! 'company', company: @company
  json.jobIds @company.jobs.pluck(:id)
end

@company.jobs.each do |job|
  json.jobs do
    json.set! job.id do
      json.partial! 'jobs/job', job: job, show_company: false
    end
  end
end
