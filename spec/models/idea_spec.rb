require 'rails_helper'

RSpec.describe Idea do
  it "has a default quality of swill" do
    idea = Idea.create(title: "Title 1", body: "Body 1")

    expect(idea.quality).to eq("swill")
  end
end
