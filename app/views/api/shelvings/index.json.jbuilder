@shelvings.map do |shelving|
  json.set! shelving.id do
    json.partial! 'shelvings', shelving: shelving
  end
end
