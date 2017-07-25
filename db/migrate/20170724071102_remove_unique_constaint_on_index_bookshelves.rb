class RemoveUniqueConstaintOnIndexBookshelves < ActiveRecord::Migration[5.1]
  def change
    remove_index :bookshelves, [:user_id, :book_id]
  end
end
