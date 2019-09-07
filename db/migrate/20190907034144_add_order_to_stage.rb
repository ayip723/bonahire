class AddOrderToStage < ActiveRecord::Migration[5.2]
  def change
    add_column :stages, :order, :int
  end
end
