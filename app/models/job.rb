class Job < ApplicationRecord
  belongs_to :company
  has_may :stages
  has_many :applications
end
