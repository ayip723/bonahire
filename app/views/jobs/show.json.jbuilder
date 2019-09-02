# json.partial! "job", job: @job, show_company: false
json.partial! '/jobs/job', job: @job, show_company: false, show_application_ids: false
json.applied @applied
