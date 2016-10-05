require 'rails_helper'

RSpec.feature "Can see all ideas", js: true do
  scenario "visit the main page" do
    idea1 = create(:idea)
    idea2 = create(:idea)

    visit root_path

    expect(page).to have_content(idea1.title)
    expect(page).to have_content(idea2.body)
    expect(page).to have_content(idea2.title)
    expect(page).to have_content(idea2.body)
  end
end
