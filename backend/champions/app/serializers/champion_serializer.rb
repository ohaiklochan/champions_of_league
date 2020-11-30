class ChampionSerializer < ActiveModel::Serializer
  attributes :id, :name, :title, :image, :tags

  has_many :backstories
end
