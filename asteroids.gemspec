$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "asteroids/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "asteroids"
  s.version     = Asteroids::VERSION
  s.authors     = ["Douglas Teixeira"]
  s.email       = ["teixeir3@gmail.com"]
  s.homepage    = "http://www.DougTeixeira.com/asteroids"
  s.summary     = "TODO: Summary of Asteroids."
  s.description = "TODO: Description of Asteroids."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.2.1"

  s.add_development_dependency "psql"
end
