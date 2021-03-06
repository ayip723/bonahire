Rails.application.routes.draw do
  # get 'hello_world', to: 'hello_world#index'
  root "hello_world#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :companies do
    collection do
      get 'my_company'
    end
  end
  # resources :jobs do
  #   resources :applications
  # end
  resources :jobs do
    resources :applications, only: [:index]
  end
  # resources :applications
  resource :user, only: [:create]
  resource :session, only: [:create, :destroy, :show]

  resources :applications do
    collection do
      get 'my_applications'
    end
    resources :movings
  end
end
