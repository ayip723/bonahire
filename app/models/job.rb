class Job < ApplicationRecord
  belongs_to :company
  has_many :stages
  has_many :applications
end
