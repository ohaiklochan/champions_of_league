class CreateChampions < ActiveRecord::Migration[6.0]
  def change
    create_table :champions do |t|
      t.string :name
      t.string :role
      t.integer :win_ratio
      t.integer :pick_ratio

      t.timestamps
    end
  end
end
