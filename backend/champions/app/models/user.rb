class User < ApplicationRecord
    has_many :champions

    validates :username, presence: true 
    validates :username, uniqueness: {message: "Username already in use, please try again." }
end
