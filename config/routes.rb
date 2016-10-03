Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'ideas#index'
  namespace :api, defaults: { format: JSON } do
    namespace :v1 do
      resources :ideas, except: [:edit, :new]
    end
  end

  resources :ideas
end
