class Moving < ApplicationRecord
  belongs_to :stage
  belongs_to :application
end
