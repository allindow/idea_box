class IdeasController < ApplicationController
  def index
    @ideas = Idea.all.reverse
  end
end
