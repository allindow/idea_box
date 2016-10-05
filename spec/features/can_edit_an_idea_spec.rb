require 'rails_helper'

RSpec.feature "Can edit an idea", js: true do
  scenario "on the main page" do
    Idea.create(title: "Best idea", body: "is this one")

    visit root_path

    within('.idea') do
      find("#idea-title").set("Best idea!!")
      find("#idea-body").set("is this one!!")
      expect(page).to have_content("Best idea!!")
      expect(page).to have_content("is this one!!")
    end
  end
end
