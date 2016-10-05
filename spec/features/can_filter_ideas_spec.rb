require 'rails_helper'

RSpec.feature "Can filter ideas", js: true do
  scenario "on the main page" do
    Idea.create(title: "Best idea", body: "is this one")
    Idea.create(title: "Second", body: "place")

    visit root_path

    fill_in "idea_filter_all", with: "Second"

    expect(page).to_not have_content("Best idea")
    expect(page).to_not have_content("is this one")
    expect(page).to have_content("Second")
    expect(page).to have_content("place")
  end
end
