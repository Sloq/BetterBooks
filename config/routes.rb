Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
      resources :bookshelves, only: [:index]
      resources :bookshelves, only: [:show, :create, :destroy], param: :shelf_name
    end
    resource :session, only: [:create, :destroy]
    resources :books, except: [:create, :edit, :destroy] do
      resources :reviews, only: [:create, :index]
      resources :shelvings, only: [:index, :create]
      resources :shelvings, only: [:destroy]
      resources :shelvings, only: [:update], param: :read_status
    end
    patch "books/:book_id/bookshelves/", to: 'bookshelves#update'
    resources :authors, only: [:show]
    # resources :reviews
  end

  root "static_pages#root"
end
