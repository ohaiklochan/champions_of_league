class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :username, :email, :champion
  end