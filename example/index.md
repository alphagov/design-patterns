---
layout: template-example
document-type: Guide
title: Design style guide examples
phases:
  - alpha
---

<div id="global-breadcrumb" class="breadcrumb">
  <nav role="navigation">
    <ol class="group">
      <li><a href="https://www.gov.uk/service-manual">Home</a></li>
      <li><a href="{{ site.baseurl }}/">New design guides</a></li>
    </ol>
  </nav>
</div>

<div class="grid-wrapper">
  <div class="grid">
    <div class="inner-block">

      <div class="text">

        <h1 class="heading-48">
          <span class="heading-27">{{ page.document-type }}</span>
          {{ page.title }}
        </h1>

        <p>
          These examples use the style guide helper, and show how to get started using the GOV.UK front end toolkit by creating basic styles for typography and grid layout.
        </p>
        
        <ul>
          <li><a href="{{ site.baseurl }}/example/typography.html">Typography</a></li>
          <li><a href="{{ site.baseurl }}/example/grid.html">Grid layout</a></li>
        </ul>
        
        <h3 class="heading-24">The style guide helper files</h3>
        
        <p>
          These examples assume you are familiar with Sass and that you will use Sass to generate your stylesheets.
        </p>
        
        <p>
          The <code>main.scss</code> file has a dependancy on the GOV.UK front end toolkit.
        </p>
        
        <p>
          Mobile styles are defined first, then the <code>@media</code> mixin from the GOV.UK front end toolkit is used to override the mobile-first styles with tablet or desktop styles. <a href="https://github.com/alphagov/govuk_frontend_toolkit#media">More on how this works here</a>.
       </p>
       <p>
         The helper makes use of a <code>$gutter</code> variable. This is 30px and there's also a <code>$gutter-half</code> at 15px. <a href="{{ site.baseurl }}/example/grid.html">Take a look at how the grid layout works</a> to see these variables in use.
       </p>

      </div>

    </div>
  </div>
</div>

