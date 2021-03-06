class Application < ApplicationRecord
  belongs_to :job
  belongs_to :user
  validates :user_id, uniqueness: {scope: :job_id}
  has_many :movings
end
