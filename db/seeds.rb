# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
companies = Company.create([
  { name: 'Company A', description: 'Company A description...' },
  { name: 'Company B', description: 'Company B description...'}
  ])

Job.create([
  { position: 'Position 1', description: 'Description 1', company_id: 1},
  { position: 'Position 2', description: 'Description 2', company_id: 1},
  { position: 'Position 3', description: 'Description 3', company_id: 2},
  { position: 'Position 4', description: 'Description 4', company_id: 2},
  ])

User.create([
  {email: 'ayip@spincar.com', password: 'CATpig65'},
  {email: 'ayip2@spincar.com', password: 'CATpig65'},
  {email: 'ayip3@spincar.com', password: 'CATpig65'}
  ])

Application.create([
  {job_id: 1, user_id: 1, comment: 'comment 1'},
  {job_id: 2, user_id: 1, comment: 'comment 2'},
  {job_id: 1, user_id: 2, comment: 'comment 3'},
  {job_id: 2, user_id: 2, comment: 'comment 4'},
  ])
