class Champion < ApplicationRecord
    validates :name, presence: true
    validates :title, presence: true
    validates :image, presence: true
    validates :tags, presence: true
    belongs_to :user, optional: true
end
