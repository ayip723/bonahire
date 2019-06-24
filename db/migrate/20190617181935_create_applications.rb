class CreateApplications < ActiveRecord::Migration[5.2]
  def change
    create_table :applications do |t|
      t.integer :job_id
      t.integer :user_id
      t.text :comment
      t.timestamps
    end
  end
end
