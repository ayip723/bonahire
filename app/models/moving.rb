class Moving < ApplicationRecord
  belongs_to :stage
  belongs_to :application
  validates_uniqueness_of :stage_id, scope: :application_id

end
