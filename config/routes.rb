Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
      resources :bookshelves, only: [:index, :destroy, :create ]
      resources :bookshelves, only: [:show, :destroy], param: :type
    end
    resource :session, only: [:create, :destroy]
    resources :books, except: [:create, :edit, :destroy]
    patch "books/:book_id/bookshelves/", to: 'bookshelves#update'
    resources :authors, only: [:show]
    # resources :reviews
  end

  root "static_pages#root"
end
