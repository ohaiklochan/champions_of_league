class Champion < ApplicationRecord
    belongs_to :user
    belongs_to :lists
    belongs_to :champs
end
