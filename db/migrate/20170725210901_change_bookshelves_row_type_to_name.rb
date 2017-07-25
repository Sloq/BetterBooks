class ChangeBookshelvesRowTypeToName < ActiveRecord::Migration[5.1]
  def change
    rename_column :bookshelves, :shelf_type, :shelf_name
  end
end
