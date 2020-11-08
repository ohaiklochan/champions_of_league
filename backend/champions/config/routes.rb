Rails.application.routes.draw do
  resources :users
  resources :champions

  get '/users/:id', to: 'users#show'
  delete '/users/:id', to:  'users#logout'
  get '/login/:username', to: 'users#handle_login'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
