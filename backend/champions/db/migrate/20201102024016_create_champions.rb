class CreateChampions < ActiveRecord::Migration[6.0]
  def change
    create_table :champions do |t|
      t.string :name
      t.string :image
      t.string :description
      t.integer :champion_id

      t.timestamps
    end
  end
end
