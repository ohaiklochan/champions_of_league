class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username
  has_many :champions
  has_many :lists
end
