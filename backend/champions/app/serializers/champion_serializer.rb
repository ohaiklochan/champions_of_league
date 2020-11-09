class ChampionSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :user_id, :list
  belongs_to :user
end
