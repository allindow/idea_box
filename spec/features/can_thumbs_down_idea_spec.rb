require 'rails_helper'

RSpec.feature "Can thumbs down an idea", js: true do
  scenario "on the main page" do
    Idea.create(title: "Best idea", body: "is this one", quality: 2)

    visit root_path

    within('.idea') do
      expect(page).to have_content("Quality: genius")
      click_on "down-idea"
      expect(page).to have_content("Quality: plausible")
      click_on "down-idea"
      expect(page).to have_content("Quality: swill")
      click_on "down-idea"
      expect(page).to have_content("Quality: swill")
    end
  end
end
