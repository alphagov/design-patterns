require 'open3'
require 'tmpdir'

namespace :patterns do
  desc "Install govuk_template"
  task :install_govuk_template, :pkg do |t, args|
    root_dir = File.expand_path( File.dirname( __FILE__ ))
    archive = File.expand_path("#{root_dir}/#{args[:pkg]}")
    Dir.mktmpdir('template') do |dir|
      Dir.chdir(dir)
      output, status = Open3.capture2e("tar -xvzf #{archive}")
      abort "Error untaring file #{archive}:\n#{output}" if status.exitstatus > 0
      template_dir = output.split("\n")[0]
      output, status = Open3.capture2e("mv #{template_dir}views/layouts/govuk_template.html #{root_dir}/_layouts")
      abort "Error copying template to #{root_dir}/_layouts:\n#{output}" if status.exitstatus > 0
      output, status = Open3.capture2e("rm -rf #{root_dir}/patterns/assets/govuk_template")
      output, status = Open3.capture2e("mv -f #{template_dir}assets #{root_dir}/patterns/assets/govuk_template")
      abort "Error copying assets to #{root_dir}/patterns/assets/govuk_template:\n#{output}" if status.exitstatus > 0
    end
  end
end
