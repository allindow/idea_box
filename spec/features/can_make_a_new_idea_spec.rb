require 'rails_helper'

RSpec.feature "Can make a new idea", js: true do
  scenario "on the main page" do
    visit root_path
    fill_in "idea-title", with: "Best idea"
    fill_in "idea-body", with: "is this one"
    click_on "Save"
    within('.idea') do
      expect(page).to have_content("Best idea")
      expect(page).to have_content("is this one")
      expect(page).to have_button("Delete")
      expect(page).to have_css(".fa-thumbs-o-up")
      expect(page).to have_css(".fa-thumbs-o-down")
    end
  end
end
