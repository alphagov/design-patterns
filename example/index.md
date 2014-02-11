---
layout: default
document-type: Example
title: Design style guide examples
phases:
  - alpha
breadcrumb:
  -
    title: Home
    url: https://www.gov.uk/service-manual
  -
    title: New design guides
    url: /
  -
    title: Design style guide examples
    url: /example/
---

<div class="text">
  <p>
    These examples use the style guide helper, and show how to get started using the GOV.UK front end toolkit by creating basic styles for typography and grid layout.
  </p>

  <ul>
    <li><a href="{{ site.baseurl }}/example/typography.html">Typography</a></li>
    <li><a href="{{ site.baseurl }}/example/grid.html">Grid layout</a></li>
    <li><a href="{{ site.baseurl }}/example/form.html">Forms</a></li>
  </ul>

  <h3 class="heading-24">The style guide helper files</h3>

  <p>
    These examples assume you are familiar with Sass and that you will use Sass to generate your stylesheets.
  </p>

  <p>
    The style guide helper files have a dependancy on the GOV.UK front end toolkit.
  </p>

  <p>
    Mobile styles are defined first, then the <code>@media</code> mixin from the GOV.UK front end toolkit is used to override the mobile-first styles with tablet or desktop styles. <a href="https://github.com/alphagov/govuk_frontend_toolkit#media">More on how this works here</a>.
  </p>
  <p>
    The helper makes use of a <code>$gutter</code> variable. This is 30px and there's also a <code>$gutter-half</code> at 15px. <a href="{{ site.baseurl }}/example/grid.html">Take a look at how the grid layout works</a> to see these variables in use.
  </p>
</div>
