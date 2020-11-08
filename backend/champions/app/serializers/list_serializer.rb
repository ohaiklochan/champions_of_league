class ListSerializer < ActiveModel::Serializer
  attributes :id, :name, :champions, :user_id

  has_many :champions
end
