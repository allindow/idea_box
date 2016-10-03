class Idea < ApplicationRecord
  validates_presence_of :title, :body
  enum quality: [ :swill, :plausible, :genius ]
end
