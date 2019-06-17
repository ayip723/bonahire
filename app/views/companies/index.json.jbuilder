# json.companies(@companies, partial: "companies/company", as: :company)
@companies.each do |company|
  json.set! company.id do
    json.partial! 'company', company: company, show_jobs: false
  end
end
