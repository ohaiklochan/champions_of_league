Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create]
  resources :categories, only: [:index, :show]

  get '/champions/:id', to: 'champions#show'
  get '/champions', to: 'champions#index'

  post '/lists', to: 'lists#create'
  get '/lists', to: 'lists#index'
  get '/lists/:id', to: 'lists#show'
  delete '/lists/:id', to: 'lists#destroy'

  patch 'lists/:id', to: 'lists#update'

  get '/users/:id', to: 'users#show'
  delete '/users/:id', to:  'users#logout'
  get '/login/:username', to: 'users#handle_login'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
