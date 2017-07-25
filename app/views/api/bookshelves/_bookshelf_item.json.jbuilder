json.extract! bookshelf, :shelf_type, :read_status, :book_id
json.extract! bookshelf.book, :title, :cover_img
json.extract! bookshelf.book.author, :name
