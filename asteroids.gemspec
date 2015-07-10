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
  s.summary     = "Javascript version of class Asteroids game. Designed to be included in the rails asset pipeline."
  s.description = "Javascript version of class Asteroids game. Designed to be included in the rails asset pipeline."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.2.1"

  s.add_development_dependency "psql"
end
