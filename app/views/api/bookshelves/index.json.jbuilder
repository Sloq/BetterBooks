
json.array! @bookshelves do |shelf|

    json.shelfName shelf.shelf_name
    json.shelfId shelf.id

end
