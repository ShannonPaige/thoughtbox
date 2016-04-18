Rails.application.routes.draw do
  root 'welcome#index'
  resources :users, only: [:new]
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/dashboard', to: 'links#index'
end
