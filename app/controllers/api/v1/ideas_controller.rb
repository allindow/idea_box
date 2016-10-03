class Api::V1::IdeasController < ApplicationController
  before_action :get_ideas, except: [:destroy]
  def create
    Idea.create(idea_params)
    render 'api/v1/ideas/index', status: 201
  end

  def index
    render 'api/v1/ideas/index'
  end

  def update
    Idea.find(params[:id]).update(idea_params)
    render 'api/v1/ideas/index'
  end

  def destroy
    if Idea.delete(params[:id])
      render status: 204
    end
  end

  private
    def idea_params
      params.permit(:title, :body)
    end

    def get_ideas
      @ideas = Idea.all
    end
end
