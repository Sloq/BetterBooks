json.extract! @shelvings.first, :read_status

# json.shelfName @shelvings do |shelving|
#   json.set! shelving.id, shelving.bookshelf.shelf_name
# end
them_shelves = @shelvings.map do |shelving|
  next if shelving.bookshelf.shelf_name == "Default"
  shelving.bookshelf.shelf_name
end

json.inShelves them_shelves.compact
