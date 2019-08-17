# json.array! @applications
# json.applications @applications

@applications.each do |application|
  json.set! application.id do
    json.partial! 'application', application: application
  end
end
