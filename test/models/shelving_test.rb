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

require 'test_helper'

class ShelvingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
