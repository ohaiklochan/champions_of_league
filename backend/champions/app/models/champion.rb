class Champion < ApplicationRecord
    has_many :backstories, :dependent => :destroy
end
