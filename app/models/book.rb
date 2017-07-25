# == Schema Information
#
# Table name: books
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  blurb      :text
#  cover_img  :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Book < ApplicationRecord
  validates :title, :cover_img, :author, presence: true

  belongs_to :author
  has_many :bookshelves
  has_many :shelvings
end
