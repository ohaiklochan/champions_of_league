class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username
  has_many :champion
end
