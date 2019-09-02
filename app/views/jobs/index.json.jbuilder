@jobs.each do |job|
  json.set! job.id do
    json.partial! 'job', job: job, show_company: false, show_application_ids: false
  end
end
