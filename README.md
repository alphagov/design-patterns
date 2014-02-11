# Design pattern library [DISCOVERY]

Some early prototypes for a design pattern library.

[http://alphagov.github.io/design-patterns/](http://alphagov.github.io/design-patterns/)

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

### Submodules

The site uses the [govuk_frontend_toolkit](https://github.com/alphagov/govuk_frontend_toolkit) as a [Git submodule](http://git-scm.com/book/en/Git-Tools-Submodules). After cloning the project, you will need to run these commands to initialise the submodule:

```
git submodule init
git submodule update
```

This will make the toolkit files available which is required for the Sass to compile correctly.

You should always be working from the latest version of the toolkit. To update it, run this command:

The site has been designed to be hosted on GitHub pages, which run Jekyll in Safe mode. For this reason if you make any changes to the Sass files you'll need to compile them locally. From the root folder:

```
git submodule update
```

### Running Sass

```
sass --stop-on-error --style expanded --line-numbers --watch assets/sass:assets/stylesheets
```

If you want to preview your work locally, run Jekyll like this:

### Running Jekyll

```
jekyll serve --watch --baseurl ''
```

This is so that URLs are correctly resolved in both local and GitHub hosted environents.

Finally, because we're using GitHub Pages there is no master branch - 'gh-pages' is the default branch.
