class List < ApplicationRecord
    belongs_to :user
    has_many :champions

    validates :name, presence: {message: 'Please Provide A Title'}
end
