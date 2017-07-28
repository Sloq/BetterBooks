@shelvings.map do |shelving|
  json.set! shelving.book.id do
    json.partial! 'shelvings', shelving: shelving
  end
end
