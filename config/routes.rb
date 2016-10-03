Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: JSON } do
    namespace :v1 do
      resources :ideas
    end
  end
end
