module Asteroids
  module Rails
    class Engine < ::Rails::Engine
      initializer 'asteroids.assets.precompile' do |app|
        %w(javascripts asteroids javascripts/asteroids).each do |sub|
          app.config.assets.paths << root.join('assets', sub).to_s
        end
      end
    end
  end
