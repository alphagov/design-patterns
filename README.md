# Design pattern library [DISCOVERY]

Some early prototypes for a design pattern library.

[http://alphagov.github.io/design-patterns/patterns/](http://alphagov.github.io/design-patterns/patterns/)

## Set up

To run the site inside a Virtual Machine (VM), you will need [Vagrant](http://www.vagrantup.com/) to create and manage the VM & [VirtualBox](https://www.virtualbox.org/) to run it.

To create the VM, in the root of this repository, run:

```
vagrant up
```

To SSH into the newly started VM, run:

```
vagrant ssh
```

When logged into the VM, you will need to go to the project folder & run Bundler to install all the required RubyGems:

```
cd /design-patterns
bundle
```

## Installation

The site has been designed to be hosted on GitHub pages, which run Jekyll in Safe mode. For this reason if you make any changes to the Sass files you'll need to compile them locally. From the '/patterns/assets' folder:

```
sass --watch sass:stylesheets
```

If you want to preview your work locally, run Jekyll like this:

```
jekyll serve --watch --baseurl ''
```

This is so that URLs are correctly resolved in both local and GitHub hosted environents.

Finally, because we're using GitHub Pages there is no master branch - 'gh-pages' is the default branch.
