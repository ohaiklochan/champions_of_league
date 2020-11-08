class ChampionSerializer < ActiveModel::Serializer
  attributes :id, :name, :role, :pick_ratio, :win_ratio
  belongs_to :user
end
