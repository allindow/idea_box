class Api::V1::IdeasController < ApplicationController
  def create
    @idea = Idea.create(idea_params)
    render 'api/v1/ideas/show', status: 201
  end

  def index
    @ideas = Idea.order(created_at: :desc)
    render 'api/v1/ideas/index'
  end

  def update
    @idea = Idea.find(params[:id])
    @idea.update(update_params)
    render 'api/v1/ideas/show'
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

    def update_params
      params.permit(:title, :body, :quality)
    end

end
