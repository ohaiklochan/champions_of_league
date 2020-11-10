# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'

User.create(name: "Demo User", email: "demo@user.com", username: "DemoUser")

Champion.destroy_all

lol_champions = RestClient.get 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json'

lol_champions_array = JSON.parse(lol_champions)

lol_champions_array.each do |champion|
    Champion.create(
        name: champion['name'],
        title: champion['title'],
        image: champion['image']
    )
end