# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"
  config.vm.network :forwarded_port, guest: 80,   host: 8080
  config.vm.network :forwarded_port, guest: 3306, host: 8889
  config.vm.network :forwarded_port, guest: 5432, host: 5433
  config.vm.network :private_network, ip: "192.168.33.33" #your project url
  config.vm.provision :shell, :path => "install.sh" #vagrant installation file settings
	config.vm.synced_folder ".", "/var/www" #ssh folder access /first parameter is a path to a directory on the host machine/
end
