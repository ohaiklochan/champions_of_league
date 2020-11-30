class BackstorySerializer < ActiveModel::Serializer
  attributes :id, :content

  belongs_to :champions
end
