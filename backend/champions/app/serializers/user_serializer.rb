class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :champions, :lists
end
