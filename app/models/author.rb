# == Schema Information
#
# Table name: authors
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Author < ApplicationRecord
  validates :name, presence: true

  has_many :books
  has_many :shelvings, through: :books
end
