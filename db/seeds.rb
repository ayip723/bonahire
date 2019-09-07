# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
  {email: 'applicant@bonahire.com', password: 'CATpig65'},
  {email: 'applicant2@bonahire.com', password: 'CATpig65'},
  {email: 'applicant3@bonahire.com', password: 'CATpig65'},
  {email: 'admin@bonahire.com', password: 'CATpig65'},
  {email: 'admin2@bonahire.com', password: 'CATpig65'},
  {email: 'admin3@bonahire.com', password: 'CATpig65'}
  ])

i = 0
User.all.each do |user|
  i += 1
  if i < 4
    user.add_role :applicant
  else
    user.add_role :employer
  end
end

companies = Company.create([
  { name: 'Company A', description: 'Company A description...', user_id: 4},
  { name: 'Company B', description: 'Company B description...', user_id: 5}
  ])

Job.create([
  { position: 'Position 1', description: 'Description 1', company_id: 1},
  { position: 'Position 2', description: 'Description 2', company_id: 1},
  { position: 'Position 3', description: 'Description 3', company_id: 2},
  { position: 'Position 4', description: 'Description 4', company_id: 2},
  ])

Stage.create([
  {job_id: 1, name: 'stage 1', description: 'description 1', order: 0},
  {job_id: 1, name: 'stage 2', description: 'description 2', order: 1},
  {job_id: 2, name: 'stage 1', description: 'description 3', order: 0},
  {job_id: 2, name: 'stage 2', description: 'description 4', order: 1},
  {job_id: 3, name: 'stage 1', description: 'description 5', order: 0},
  {job_id: 3, name: 'stage 2', description: 'description 6', order: 1},
  {job_id: 4, name: 'stage 1', description: 'description 7', order: 0},
  {job_id: 4, name: 'stage 2', description: 'description 8', order: 1},
  ])

Application.create([
  {job_id: 1, user_id: 1, comment: 'comment 1'},
  {job_id: 2, user_id: 1, comment: 'comment 2'},
  {job_id: 1, user_id: 2, comment: 'comment 3'},
  {job_id: 2, user_id: 2, comment: 'comment 4'},
  ])

Moving.create([
  {application_id: 1, stage_id: 1, comment: 'comment 1'},
  {application_id: 2, stage_id: 3, comment: 'comment 2'},
  {application_id: 3, stage_id: 5, comment: 'comment 3'},
  {application_id: 4, stage_id: 7, comment: 'comment 4'},
  ])
