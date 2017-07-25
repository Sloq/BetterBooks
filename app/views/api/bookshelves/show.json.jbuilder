@shelf.map do |shelving|
  json.set! shelving.id do
    json.partial! 'bookshelf_shelvings', shelving: shelving
  end
end
