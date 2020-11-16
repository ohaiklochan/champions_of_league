class Champion < ApplicationRecord
    belongs_to :user
    has_many :abilities
end
