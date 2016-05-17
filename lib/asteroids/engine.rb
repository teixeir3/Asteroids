module Asteroids
  module Rails
    class Engine < ::Rails::Engine
      initializer 'static_assets.load_static_assets' do |app|
        app.middleware.use ::ActionDispatch::Static, "#{root}/lib"
      end
    end
  end
end