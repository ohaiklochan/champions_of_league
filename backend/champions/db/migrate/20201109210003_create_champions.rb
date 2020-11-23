class CreateChampions < ActiveRecord::Migration[6.0]
  def change
    create_table :champions do |t|
      t.string :name
      t.string :title
      t.string :image
      t.string :tags
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
