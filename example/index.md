---
layout: template-example
document-type: Guide
title: Design guide examples
phases:
  - alpha
---

<div id="global-breadcrumb" class="breadcrumb">
  <nav role="navigation">
    <ol class="group">
      <li><a href="https://www.gov.uk">Home</a></li>
      <li><a href="{{ site.baseurl }}/">Guides</a></li>
      <li><a href="{{ site.baseurl }}/example/">Examples</a></li>
    </ol>
  </nav>
</div>

<div class="grid-wrapper">
  <div class="grid">
    <div class="inner-block">

      <div class="text">

        <h1>
          <span>{{ page.document-type }}</span>
          {{ page.title }}
        </h1>

        <p>
          These examples show how to get started using the <a href="https://github.com/alphagov/design-patterns/tree/gh-pages/example/assets/sass/govuk-boilerplate">GOV.UK boilerplate</a> and create  basic styles for typography and grid layout.
        </p>

        <p>
          To keep things tidy, typography styles are applied using the <code>.gov-uk</code> class on the <code>&lt;main&gt;</code> content area.
          A <code>.text</code> class is used to wrap blocks of text, for optimal line length (50-60 characters per line). 
        </p>

        <ul>
          <li><a href="{{ site.baseurl }}/example/typography.html">Typography</a></li>
          <li><a href="{{ site.baseurl }}/example/typography-classnames.html">Typography using classnames</a></li>
          <li><a href="{{ site.baseurl }}/example/grid.html">Grid layout</a></li>
          <li><a href="{{ site.baseurl }}/example/form.html">Form styles and buttons</a></li>
        </ul>

        <h2>Using Sass</h2>

        <p>
          These examples assume you are familiar with Sass and that you will use Sass to generate your stylesheets.
        </p>

        <p>
          Take a look at the <a href="https://github.com/alphagov/design-patterns/blob/gh-pages/example/assets/sass/base.scss">base.scss</a> file to see how these examples are structured.
        </p>
        <p>

        <h2>The GOV.UK boilerplate</h2>

        <h3>Dependancies</h3>
        <p>
          The <code>main.scss</code> file has a dependancy on the GOV.UK frontend toolkit.
        </p>
        <p>
          You'll need the GOV.UK frontend toolkit to use the GOV.UK boilerplate, since it uses the mixins and variables the toolkit defines.
        </p>

        <h3>Best practice</h3>
        <p>
          The <code>main.scss</code> file is structured in a mobile-and-up fashion. Mobile styles are defined first, then the <code>media</code> mixin is used to override the default mobile styles with tablet or desktop styles.
       </p>
       <p>
          Variables in Sass make it easy to see where the same values are repeated. The boilerplate makes use of a <code>$gutter</code> variable. This is 30px and there's also a <code>$gutter-half</code> at 15px. Take a look at how the grid layout works to see these variables in use.
       </p>

      </div>

    </div>
  </div>
</div>
