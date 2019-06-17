class Job < ApplicationRecord
  belongs_to :company
  has_may :stages
end
