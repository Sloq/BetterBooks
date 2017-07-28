if @shelvings[0]
  json.extract! @shelvings.first, :read_status

  shelves = @shelvings.map do |shelf|
    json.set! shelf.bookshelf.id, shelf.bookshelf.shelf_name
  end

  json.set! :inShelves, shelves

else
  json.inShelves ""
  json.read_status ""
end
