json.extract! shelving, :read_status
json.extract! shelving.book, :title, :cover_img, :id
json.extract! shelving.book.author, :name
