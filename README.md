# Design pattern library [DISCOVERY]

Some early prototypes for a design pattern library.

[http://alphagov.github.io/design-patterns/patterns/](http://alphagov.github.io/design-patterns/patterns/)


## Installation

The site has been designed to be hosted on GitHub pages, which run Jekyll in Safe mode. For this reason, any Sass has to be preprocessed before it's uploaded to GitHub. So, first you'll need to do that. From the '/patterns/assets' folder:

```
sass --watch sass:stylesheets
```

If you want to preview your work locally you'll need to run Jekyll like this:

```
jekyll serve --watch --baseurl ''
```

This is so that URLs are correctly resolved in both local and GitHib hosted environents.