class CreateMovings < ActiveRecord::Migration[5.2]
  def change
    create_table :movings do |t|

      t.timestamps
    end
  end
end
