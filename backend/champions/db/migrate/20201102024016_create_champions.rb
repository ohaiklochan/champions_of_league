class CreateChampions < ActiveRecord::Migration[6.0]
  def change
    create_table :champions do |t|
      t.string :name
      t.string :image
      t.string :description
      t.belongs_to :user
      t.belongs_to :list

      t.timestamps
    end
  end
end
