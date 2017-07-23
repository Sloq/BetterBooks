class Book < ApplicationRecord
  validates :title, :cover_img, :author, presence: true

  belongs_to :author
  has_many :bookshelves
end
