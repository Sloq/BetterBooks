# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(username: "Bobby", password: "123456", profile_pic: "jfkajfldjal", email: "hehehe@yahoo.com")
user2 = User.create(username: "Gretta", password: "123456", profile_pic: "jfkajfldjal", email: "hohoho@yahoo.com")
user3 = User.create(username: "Navajo", password: "123456", profile_pic: "jfkajfldjal", email: "hihihi@yahoo.com")
guest = User.create(username: "Guest", password: "guest123456", profile_pic: "jfkajfldjal", email: "guest@gueslogin.com")

user4 = User.create(username: "Bailey", password: "batman", profile_pic: "jfkajfldjal", email: "hidfhihi@yahoo.com")
