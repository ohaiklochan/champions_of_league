Rails.application.routes.draw do
  resources :types
  resources :users, only: [:create]
  post "login", to: "authentication#login"
  resources :champions
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
