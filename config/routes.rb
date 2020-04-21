Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Keep this line at the end of the routes
  # Send all remaining requests to Angular
  get '*path', to: 'angular#index'
end
