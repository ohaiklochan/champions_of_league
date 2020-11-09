class ChampionSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :user_id, :list_id
  belongs_to :user
end
