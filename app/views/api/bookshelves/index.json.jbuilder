
json.array! @bookshelves do |shelf|
  json.set! shelf.id, shelf.shelf_name
end
