@bookshelf.map do |bookshelf_item|
  json.set! bookshelf_item.id do
    json.partial! 'bookshelf_item', bookshelf: bookshelf_item
  end
end
