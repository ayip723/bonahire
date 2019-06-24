class CreateMovings < ActiveRecord::Migration[5.2]
  def change
    create_table :movings do |t|
      t.integer :stage_id
      t.text :comment
      t.timestamps
    end
  end
end
