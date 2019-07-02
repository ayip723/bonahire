Rails.application.routes.draw do
  # get 'hello_world', to: 'hello_world#index'
  root "hello_world#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :companies
  resources :jobs
  resource :user, only: [:create]
  resource :session, only: [:create, :destroy, :show]
end
