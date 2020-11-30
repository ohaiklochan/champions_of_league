class CreateBackstories < ActiveRecord::Migration[6.0]
  def change
    create_table :backstories do |t|
      t.text :content
      t.refrences :champion, foreign_key: true

      t.timestamps
    end
  end
end
