Rails.application.routes.draw do

  namespace :api do
    get 'sessions/create'
  end

  namespace :api do
    get 'sessions/destroy'
  end

  namespace :api do
    get 'users/create'
  end

  get 'users/create'

  namespace :api, defaults: { format: :json } do
    resources :user, only: [ :create, :destroy, :update ]
    resource :session, only: [ :create, :destroy ]
  end

  root "static_pages#root"
end
