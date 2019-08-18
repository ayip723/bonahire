class Application < ApplicationRecord
  belongs_to :job
  validates :user_id, uniqueness: {scope: :job_id}
end
