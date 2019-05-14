lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "photo-blog-master/version"

Gem::Specification.new do |spec|
  spec.name          = "photo-blog-master"
  spec.version       = PhotoBlogMaster::VERSION
  spec.authors       = ["24 Magic"]
  spec.email         = ["15381087533@163.com"]

  spec.summary       = "A photo blog template and theme. Powered by Jekyll and GitHub pages."
  spec.homepage      = "https://github.com/24magic/jekyll-temp/photo-master/YLing"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|gallery|LICENSE|README)!i) }

  spec.required_ruby_version = '~> 2.0'

  spec.add_runtime_dependency 'github-pages', '~> 186'
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.1"

  spec.add_development_dependency "bundler", "~> 2.0.1"
  spec.add_development_dependency "html-proofer", "~> 3.9"
end
