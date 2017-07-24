# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)
Author.destroy_all
User.destroy_all
Book.destroy_all
Bookshelf.destroy_all

author1 = Author.create!(name: "Chuck Palahniuk")

author2 = Author.create!(name: "Kurt Vonnegut")

author3 = Author.create!(name: "Jack Kerouac")

author4 = Author.create!(name: "David Foster Wallace")

author5 = Author.create!(name: "William Shakespeare")

user = User.create!(username: "Odin", password: "123456", profile_pic: "http://res.cloudinary.com/cloudmccloud/image/upload/v1500498267/BetterBooks/003-book-2_iefo3g.png", email: "hehehe@yahoo.com")

user2 = User.create!(username: "Thor", password: "123456", profile_pic: "http://res.cloudinary.com/cloudmccloud/image/upload/v1500498267/BetterBooks/003-book-2_iefo3g.png", email: "hohoho@yahoo.com")

user3 = User.create!(username: "AsheKetchum", password: "123456", profile_pic: "http://res.cloudinary.com/cloudmccloud/image/upload/v1500498267/BetterBooks/003-book-2_iefo3g.png", email: "hihihi@yahoo.com")

user4 = User.create!(username: "Bailey", password: "batman", profile_pic: "http://res.cloudinary.com/cloudmccloud/image/upload/v1500498267/BetterBooks/003-book-2_iefo3g.png", email: "hidfhihi@yahoo.com")

guest = User.create!(username: "Guest", password: "guest123456", profile_pic: "http://res.cloudinary.com/cloudmccloud/image/upload/v1500498267/BetterBooks/003-book-2_iefo3g.png", email: "guest@guestlogin.com")

book1 = Book.create!(title: "Slaughterhouse-Five", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500609657/BetterBooks/covers/slaughter-house-five.jpg", blurb: "aliens, timetravel, so it goes", author_id: author1.id)

book2 = Book.create!(title: "Survivor", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500609658/BetterBooks/covers/survivor.jpg", blurb: "religious cults and escaping your upbringing", author_id: author2.id)

book3 = Book.create!(title: "Dharma Bums", cover_img: "http://res.cloudinary.com/cloudmccloud/image/upload/v1500609658/BetterBooks/covers/the_dharma_bums.jpg", blurb: "life on the road, living the Diamond Sutra", author_id: author3.id)

book4 = Book.create!(title: "The Pale King", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500609659/BetterBooks/covers/the-pale-king.jpg", blurb: "unfinished novel by wallace", author_id: author4.id)

book5 = Book.create!(title: "Romeo and Juliet", cover_img: "https://res.cloudinary.com/cloudmccloud/image/upload/v1500609657/BetterBooks/covers/Romeo_and_Juliet.jpg", blurb: "youth, love, death.", author_id: author5.id)

bookshelf1 = Bookshelf.create!(user_id: guest.id, book_id: book1.id, shelf_type: "all", read_status: "read")

bookshelf2 = Bookshelf.create!(user_id: guest.id, book_id: book2.id, shelf_type: "all", read_status: "read")

bookshelf3 = Bookshelf.create!(user_id: guest.id, book_id: book3.id, shelf_type: "all", read_status: "read")

bookshelf4 = Bookshelf.create!(user_id: guest.id, book_id: book4.id, shelf_type: "all", read_status: "read")

bookshelf5 = Bookshelf.create!(user_id: user.id, book_id: book3.id, shelf_type: "all", read_status: "read")

bookshelf6 = Bookshelf.create!(user_id: user2.id, book_id: book4.id, shelf_type: "all", read_status: "read")

bookshelf7 = Bookshelf.create!(user_id: user3.id, book_id: book5.id, shelf_type: "all", read_status: "read")

bookshelf8 = Bookshelf.create!(user_id: user3.id, book_id: book1.id, shelf_type: "all", read_status: "read")

bookshelf9 = Bookshelf.create!(user_id: user2.id, book_id: book2.id, shelf_type: "all", read_status: "read")
