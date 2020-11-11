# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'httparty'

Champion.destroy_all

def self.get_data
    lol_champions = HTTParty.get "https://raw.githubusercontent.com/ngryman/lol-champions/master/champions.json"

    lol_champions_array = JSON.parse(lol_champions)
    lol_champions_array.each do |champion_details|
        name = champion_details["name"]
        title = champion_details["title"]
        image = champion_details["icon"]

        Champion.new(name: name, title: title, image: image)
    end
end

# lol_champions_array = [
#     { name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png" },
#     { name: "Ahri", title: "The Nine-Tailed Fox", image: "img/champions/AhriSquare.png" }
# ]

# lol_champions_array.each do |champions|
#     Champion.where(champions).first_or_create
# end
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Ahri", title: "The Darkin Blade", image: "img/champions/AhriSquare.png")
# Champion.create(name: "Akali", title: "The Darkin Blade", image: "img/champions/AkaliSquare.png")
# Champion.create(name: "Alistar", title: "The Darkin Blade", image: "img/champions/AlistarSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")

# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")

# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")

# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")

# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")

# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")

# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")

# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")

# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")

# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")

# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")

# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")

# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")

# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")

# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")

# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
# Champion.create(name: "Aatrox", title: "The Darkin Blade", image: "img/champions/AatroxSquare.png")
