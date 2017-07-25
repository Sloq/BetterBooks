# == Schema Information
#
# Table name: shelvings
#
#  id           :integer          not null, primary key
#  bookshelf_id :integer          not null
#  book_id      :integer          not null
#  read_status  :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Shelving < ApplicationRecord
  validates :bookshelf, :book, :read_status, presence: true

  belongs_to :book
  belongs_to :bookshelf
end
