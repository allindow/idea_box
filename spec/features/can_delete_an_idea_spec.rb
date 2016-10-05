require 'rails_helper'

RSpec.feature "Can delete an idea", js: true do
  scenario "on the main page" do
    Idea.create(title: "Best idea", body: "is this one")

    visit root_path
    within('.idea') do
      click_on "Delete"
    end

    expect(page).to_not have_content("Best idea")
    expect(page).to_not have_content("is this one")
  end
end
