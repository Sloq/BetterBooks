class ChangeBookshelvesColumn < ActiveRecord::Migration[5.1]
  def change
    change_column :bookshelves, :read_status, :string, :null => true
  end
end
