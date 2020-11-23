class ChampionSerializer < ActiveModel::Serializer
  attributes :id, :name, :title, :image, :tags

  belongs_to :user
end
