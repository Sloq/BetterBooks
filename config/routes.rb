Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :books, except: [:create, :edit, :destroy]
    resources :bookshelves, except: [:new, :edit, :index]
    resources :authors, only: [:show]
    # resources :reviews
  end

  root "static_pages#root"
end
