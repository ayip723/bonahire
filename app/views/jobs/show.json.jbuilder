# json.partial! "job", job: @job, show_company: false
json.partial! '/jobs/job', job: @job, show_company: false
json.applied @applied
