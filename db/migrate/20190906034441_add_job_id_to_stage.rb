class AddJobIdToStage < ActiveRecord::Migration[5.2]
  def change
    add_column :stages, :job_id, :integer
  end
end
