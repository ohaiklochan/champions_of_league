class User < ApplicationRecord
    has_many :champions

    validates :name, presence: true
end
