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

require 'test_helper'

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
