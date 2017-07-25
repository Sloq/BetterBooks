# @shelvings.map do |shelf|
#   json.set! shelving.id do
#     json.partial! 'bookshelf_shelvings', shelving: shelving
#   end
# end
JSON.stringify(@shelvings)
# select shelf type
# json.array use this
