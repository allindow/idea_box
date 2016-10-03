FactoryGirl.define do
  factory :idea do
    title
    body
    quality 0
  end

  sequence :title do |n|
    "Title #{n}"
  end

  sequence :body do |n|
    "Body #{n}"
  end

end
