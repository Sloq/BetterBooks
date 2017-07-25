class CreateShelvings < ActiveRecord::Migration[5.1]
  def change
    create_table :shelvings do |t|
      t.integer :bookshelf_id, null: false
      t.integer :book_id, null: false
      t.string :read_status, null: false
      t.timestamps
    end
    add_index :shelvings, [:bookshelf_id, :book_id], unique: true
  end
end
