#! /bin/bash

# Set up environment
apt-get -y update
apt-get -y install ruby1.9.1-dev
apt-get -y install make

# Set language environment variables to UTF-8
echo "Exporting environment variables"
echo "export LANG=en_GB.utf8" >> /home/vagrant/.bashrc
echo "export LC_ALL=en_GB.utf8" >> /home/vagrant/.bashrc
source ~/.bashrc

# Set up application
gem install bundler
gem install sass
cd /design-patterns
bundle
