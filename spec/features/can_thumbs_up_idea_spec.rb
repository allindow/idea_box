require 'rails_helper'

RSpec.feature "Can thumbs up an idea", js: true do
  scenario "on the main page" do
    Idea.create(title: "Best idea", body: "is this one")

    visit root_path

    within('.idea') do
      expect(page).to have_content("Quality: swill")
      click_on "up-idea"
      expect(page).to have_content("Quality: plausible")
      click_on "up-idea"
      expect(page).to have_content("Quality: genius")
      click_on "up-idea"
      expect(page).to have_content("Quality: genius")
    end
  end
end
