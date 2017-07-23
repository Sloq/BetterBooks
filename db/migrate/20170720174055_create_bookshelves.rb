class CreateBookshelves < ActiveRecord::Migration[5.1]
  def change
    create_table :bookshelves do |t|
      t.integer :user_id, null: false
      t.integer :book_id
      t.string :shelf_type, null: false
      t.timestamps
    end
    add_index :bookshelves, :user_id
    add_index :bookshelves, :book_id
    add_index :bookshelves, [:user_id, :book_id], unique: true
  end
end
