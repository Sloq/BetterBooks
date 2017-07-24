class AddStatusToBookshelves < ActiveRecord::Migration[5.1]
  def change
    add_column :bookshelves, :read_status, :string, null: false
  end
end
