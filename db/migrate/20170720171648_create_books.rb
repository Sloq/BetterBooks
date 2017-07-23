class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.text :blurb
      t.string :cover_img, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :books, :title, unique: true
    add_index :books, :author_id
    add_index :books, :cover_img, unique: true
  end
end
