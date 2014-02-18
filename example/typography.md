---
layout: example
document-type: Example
title: Typography
custom-css: 'example-typography'
phases:
  - alpha
breadcrumb:
  -
    title: Home
    url: https://www.gov.uk/service-manual
  -
    title: New design guides
    url: 
  -
    title: Examples
    url: example/
---

<div class="grid-wrapper">
  <div class="grid">
    <div class="inner-block">

    <div class="text">
      
      <h1 class="heading-48">
        <span class="heading-27">{{ page.document-type }}</span>
        {{ page.title }} {% include _phase-block.html %}
      </h1>
      
      <p>
        This is an intro paragraph. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.</p>

      <h2 class="heading-36">A 36px heading</h2>

      <p>
        Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.
      </p>

      <h3 class="heading-24">A 24px heading</h3>

      <p>
      Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.
      </p>

      <h4 class="heading-19">A 19px heading</h4>

      <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>

      <ul class="list-bullet">
        <li>Here is a bulleted list.</li>
        <li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
        <li>Vestibulum id ligula porta felis euismod semper.</li>
        <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
      </ul>

      <ol class="list-number">
        <li>Here is a bulleted list.</li>
        <li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
        <li>Vestibulum id ligula porta felis euismod semper.</li>
        <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
      </ol>
      
    </div>

    </div><!-- /.inner-block -->
  </div><!-- /.grid -->
</div><!-- /.grid-wrapper -->