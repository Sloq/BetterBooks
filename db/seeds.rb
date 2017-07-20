# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(username: "Bobby", password: "123456", profile_pic: "http://res.cloudinary.com/cloudmccloud/image/upload/v1500498267/BetterBooks/003-book-2_iefo3g.png", email: "hehehe@yahoo.com")
user2 = User.create(username: "Gretta", password: "123456", profile_pic: "http://res.cloudinary.com/cloudmccloud/image/upload/v1500498267/BetterBooks/003-book-2_iefo3g.png", email: "hohoho@yahoo.com")
user3 = User.create(username: "Navajo", password: "123456", profile_pic: "http://res.cloudinary.com/cloudmccloud/image/upload/v1500498267/BetterBooks/003-book-2_iefo3g.png", email: "hihihi@yahoo.com")
guest = User.create(username: "Guest", password: "guest123456", profile_pic: "http://res.cloudinary.com/cloudmccloud/image/upload/v1500498267/BetterBooks/003-book-2_iefo3g.png", email: "guest@guestlogin.com")

user4 = User.create(username: "Bailey", password: "batman", profile_pic: "http://res.cloudinary.com/cloudmccloud/image/upload/v1500498267/BetterBooks/003-book-2_iefo3g.png", email: "hidfhihi@yahoo.com")
