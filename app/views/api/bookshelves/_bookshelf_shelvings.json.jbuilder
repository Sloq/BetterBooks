# json.extract! bookshelf, :shelf_type
json.extract! shelving, :read_status
json.extract! shelving.book, :title, :cover_img
json.extract! shelving.author, :name
