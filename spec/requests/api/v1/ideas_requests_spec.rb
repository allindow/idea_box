require 'rails_helper'

RSpec.describe "Ideas requests", type: :request do

  it "should create an idea" do
    post '/api/v1/ideas?title=idea1&body=body1'

    expect(Idea.count).to eq(1)
    expect(Idea.last.title).to eq("idea1")
    expect(json(response)["title"]).to eq("idea1")
    expect(json(response)["body"]).to eq("body1")
    expect(json(response)["quality"]).to eq("swill")
  end

  it "should get all ideas" do
    2.times { create(:idea) }

    get '/api/v1/ideas'

    expect(response).to be_success
    expect(json(response).count).to eq(2)
    expect(json(response).first["title"]).to eq(Idea.last.title)
    expect(json(response).first["body"]).to eq(Idea.last.body)
    expect(json(response).last["title"]).to eq(Idea.first.title)
    expect(json(response).last["body"]).to eq(Idea.first.body)
  end

  it "should delete an idea by id" do
    idea = create(:idea)

    expect(Idea.count).to eq(1)

    delete "/api/v1/ideas/#{idea.id}"

    expect(response.status).to eq(204)
    expect(response.message).to eq("No Content")
    expect(Idea.count).to eq(0)
  end

  it "should edit an idea by ID" do
    idea = create(:idea)

    put "/api/v1/ideas/#{idea.id}?title=new-title&body=new-body"

    expect(Idea.last.title).to eq("new-title")
    expect(Idea.last.body).to eq("new-body")
    expect(json(response)["title"]).to eq("new-title")
    expect(json(response)["body"]).to eq("new-body")
  end

  def json(response)
    JSON.parse(response.body)
  end
end
