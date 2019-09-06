class AddApplicationIdToMoving < ActiveRecord::Migration[5.2]
  def change
    add_column :movings, :application_id, :integer
  end
end
