$:.push File.expand_path("../lib", __FILE__)

lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

require "asteroids/version"

Gem::Specification.new do |s|
  s.name        = "asteroids"
  s.version     = Asteroids::VERSION
  s.authors     = ["Douglas Teixeira"]
  s.email       = ["teixeir3@gmail.com"]
  s.homepage    = "http://www.DougTeixeira.com/asteroids"
  s.summary     = "Javascript version of classic Asteroids game. Designed to be included in the rails asset pipeline."
  s.description = "Javascript version of classic Asteroids game. Designed to be included in the rails asset pipeline."
  s.license     = "MIT"

  s.add_dependency "rails", "~> 4.2.1"

  s.add_runtime_dependency 'sass'
  s.add_runtime_dependency 'autoprefixer-rails'

  # Testing dependencies
  s.add_development_dependency 'minitest'
  s.add_development_dependency 'minitest-reporters'
  # Integration testing
  s.add_development_dependency 'capybara'
  s.add_development_dependency 'poltergeist'
  # Dummy Rails app dependencies
  s.add_development_dependency 'actionpack'
  s.add_development_dependency 'activesupport'
  s.add_development_dependency 'json'
  s.add_development_dependency 'sprockets-rails'
  s.add_development_dependency 'jquery-rails'
  s.add_development_dependency 'slim-rails'
  s.add_development_dependency 'uglifier'
  # Converter
  s.add_development_dependency 'term-ansicolor'

  s.files      = `git ls-files`.split("\n")
  s.test_files = `git ls-files -- test/*`.split("\n")
end
