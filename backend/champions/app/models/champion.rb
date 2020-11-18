class Champion < ApplicationRecord
    belongs_to :user
    has_many :types
end
