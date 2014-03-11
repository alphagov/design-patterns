---
layout: default
title: GOV.UK Elements
published: 10 January 2014
updated: 11 March 2014
phases:
  - alpha
breadcrumb:
  -
    title: Home
    url: https://www.gov.uk/service-manual
  -
    title: New design guides
    url: 
---

<div class="text">
  <p>
    This guide explains how to make your service look consistent with the rest of GOV.UK and provides recommendations to help you build.
  </p>
  <p>
    This is a visual style guide, remember to always focus on the user need first and what has tested well.
  </p>
</div>

1. **[Layout](#guide-layout)**
2. **[Typography](#guide-typography)**
3. **[Colour](#guide-colour)**
4. **[Images](#guide-images)**
5. **[Data](#guide-data)**
6. **[Forms](#guide-forms)**
7. **[Buttons](#guide-buttons)**
8. **[Validations/Confirmations/Errors](#guide-errors)**
9. **[Icons](#guide-icons)**
10. **[Header/Footer](#guide-header-footer)**
11. **[Status](#guide-status)**

<div id="guide-layout">
  
  <h2 class="heading-36">Layout</h2>

  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li>We recommend working for mobile, or small screens first, then adding creating columns as screen width increases</li>
    <li>Commonly used grid unit proportions are two equal columns, three equal columns, four equal columns</li>
    <li>Small screens start full width with content stacked and can expand out into columns</li>
    <li>15px/30px gutters and how change and align with top banner</li>
    <li>Text legibility for line length recommended</li>
    <li>Spacing padding sets that can be used to space between elements </li>
  </ul>

  <h3 class="heading-24">Grid unit proportions</h3>

  <h4 class="heading-19">Two columns</h4>

  <div class="example example-grid">
    <div class="grid-wrapper">
      <div class="grid grid-2-3">
        <div class="inner-block">
          <p>Content</p>
        </div>
      </div>
      <div class="grid grid-1-3">
        <div class="inner-block">
          <p>Content</p>
        </div>
      </div>
    </div>
  </div>

  <h4 class="heading-19">Three equal columns</h4>

  <div class="example example-grid">
    <div class="grid-wrapper">
      <div class="grid grid-1-3">
        <div class="inner-block">
          <p>Content</p>
        </div>
      </div>
      <div class="grid grid-1-3">
        <div class="inner-block">
          <p>Content</p>
        </div>
      </div>
      <div class="grid grid-1-3">
        <div class="inner-block">
          <p>Content</p>
        </div>
      </div>
    </div>
  </div>
  
  <h4 class="heading-19">Four equal columns</h4>
  
  <div class="example example-grid">
    <div class="grid-wrapper">
      <div class="grid grid-1-4">
        <div class="inner-block">
          <p>Content</p>
        </div>
      </div>
      <div class="grid grid-1-4">
        <div class="inner-block">
          <p>Content</p>
        </div>
      </div>
      <div class="grid grid-1-4">
        <div class="inner-block">
          <p>Content</p>
        </div>
      </div>
      <div class="grid grid-1-4">
        <div class="inner-block">
          <p>Content</p>
        </div>
      </div>
    </div>
  </div>

  <h3 class="heading-24">Spacing</h3>
  <p>Spacing is commonly multiples of 30px, which is set as the Sass <code>$gutter</code> variable.</p>
  <p>Common spacing values are: 10, 15, 30, 45 and 60px.</p>
  <p>Horizontal rules can be used as an additional divider between paragraph content.</p>
  
  <h3 class="heading-24">Breakpoints</h3>
  <p>
    Media queries are used to set breakpoints for small, medium and large screens. These are mobile, tablet and desktop. 
  </p>
  <p>Mobile is used for to hide styles from desktop browsers, by setting a maximum width of 640px.</p>
  <p>Tablet is used to adjust styles for tablet and up, starting at 641px.</p>
  <p>Desktop styles apply from a minimum width of 769px.</p>
  <p>The media queries for these can be found in the GOV.UK frontend toolkit <a href="#">_conditionals.scss</a> file </p>

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li><a href="{{ site.baseurl}}/example/grid.html">See grid examples outside of the service manual ></a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element  ></a>
  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-layout -->

<div id="guide-typography">
  <h2 class="heading-36">Typography</h2>

  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li>Use 19px font size for paragraph and caption text</li>
    <li>Body copy should be the main focus of the page</li>
    <li>Recommended width for body reading text is 75 characters see research XXX</li>
    <li>Font colours link XXX ></li>
    <li>Create clear hierarchy using headings so content is easy to scan</li>
    <li>Use headings in a uniform way across your service</li>
    <li>Avoid using bold text inline</li>
    <li>Avoid italics</li>
    <li>Break points and how text sizes reduce (eg. large sizes jump down to look proportional to width)</li>
    <li>Smaller text sizes can be used for more specialist/internal user content always ensure that there is a real user need  (14px, 12px, 10px)</li>
  </ul>
  
  <h3 class="heading-24">Headings <br> <span class="text-secondary">New Transport Bold</span></h3>
  
  <div class="example">
    <div class="grid grid-1-2">
      <div class="inner-block">

        <h1 class="heading-48">A 48px heading</h1>
        <h2 class="heading-36">A 36px heading</h2>
        <h3 class="heading-24">A 24px heading</h3>
        <h4 class="heading-19">A 19px heading</h4>

      </div>
    </div>
    <div class="grid grid-1-2">
      <div class="inner-block">
        
        <h1 class="heading-48">Heading <em class="highlight">Bold 48px</em></h1>
        <h2 class="heading-36">Heading <em class="highlight">Bold 36px</em></h2>
        <h3 class="heading-24">Heading <em class="highlight">Bold 24px</em></h3>
        <h4 class="heading-19">Heading <em class="highlight">Bold 19px</em></h4>

      </div>
    </div>
  </div>
  
  <h3 class="heading-24">Body copy <br> <span class="text-secondary">New Transport</span></h3>
  <div class="example">
    <div class="grid grid-1-2">
      <div class="inner-block">

        <p class="lead">A 24px lead paragraph. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p class="copy-19">A 19px body copy paragraph. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p class="copy-16">A 16px supporting text paragraph. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. </p>

      </div>
    </div>
    <div class="grid grid-1-2">
      <div class="inner-block">

        <p class="lead">Paragraph. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. <em class="highlight">Normal 24px</em></p>
        <p class="copy-19">Paragraph. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. <em class="highlight">Normal 19px</em></p>
        <p class="copy-16">Paragraph. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. <em class="highlight">Normal 16px</em></p>

      </div>
    </div>
  </div>
  
  <h3 class="heading-24">Links and interaction states</h3>
  <div class="example">
    <div class="grid grid-1-2">
      <div class="inner-block">

        <p class="copy-19"><a href="">A 19px body copy link.</a> Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p class="copy-19"><a href="#" rel="external">A 19px external link. </a> Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

      </div>
    </div>
    <div class="grid grid-1-2">
      <div class="inner-block">

        <p class="copy-19"><a href="">A 19px body copy link. </a> Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p class="copy-19"><a href="#" rel="external">A 19px external link. </a> Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

      </div>
    </div>
  </div>

  <h3 class="heading-24">Lists</h3>
  <div class="example">
    <div class="inner-block">

      <ul class="list-bullet">
        <li>Here is a bulleted list.</li>
        <li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
        <li>Vestibulum id ligula porta felis euismod semper.</li>
        <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
      </ul>

      <ol class="list-number">
        <li>Here is a numbered list.</li>
        <li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
        <li>Vestibulum id ligula porta felis euismod semper.</li>
        <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
      </ol>

    </div>
  </div>

  <h3 class="heading-24">Lists</h3>
  <div class="example">
    <div class="inner-block">

      <ul class="list-bullet">
        <li>Here is a bulleted list.</li>
        <li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
        <li>Vestibulum id ligula porta felis euismod semper.</li>
        <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
      </ul>

      <ol class="list-number">
        <li>Here is a numbered list.</li>
        <li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
        <li>Vestibulum id ligula porta felis euismod semper.</li>
        <li>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
      </ol>

    </div>
  </div>

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li><a href="#">Go to typography elements context pages to get more detail ></a></li>
      <li><a href="{{ site.baseurl}}/example/typography.html">See typography element examples outside of the service manual ></a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element  ></a>
  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-typography -->

<div id="guide-colour">
  <h2 class="heading-36">Colour</h2>
  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li>Text should only be set in black with secondary text in grey. </li>
    <li>Links should be blue and buttons or dialog boxes should have text in white.</li>
  </ul>

  <h3 class="heading-24">Colour palette with HEX values and Sass variable names</h3>
  <div class="example">
    <div class="inner-block">
      <a href="#">Link colour</a>
      <p class="text-secondary">
        Secondary text colour
      </p>
    </div>
  </div>

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li><a href="#">Go to colour elements context pages to get more detail ></a></li>
      <li>You can find HEX values and Sass variable names for the GOV.UK colour palette in the <a href="https://github.com/alphagov/govuk_frontend_toolkit#colours">GOV.UK front end toolkit</a>.</a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element  ></a>
  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-colour -->

<div id="guide-images">
  <h2 class="heading-36">Images</h2>
  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li>Avoid using images, GOV.UK is for services and information, not photographs.</li>
    <li>If images cannot be avoided they should be landscape, 3:2 aspect ratio.</li>
  </ul>

  <h3 class="heading-24">Section header</h3>
  <div class="example example-images">
    <div class="grid-wrapper">
      <div class="grid grid-1-2">
        <div class="inner-block">
          <img src="../assets/images/example/3by2.jpg" alt="3:2">
        </div>
      </div>
      <div class="grid grid-1-2">
        <div class="inner-block">
          <img src="../assets/images/example/pm.jpg" alt="">
        </div>
      </div>
    </div>
  </div>

  <h3 class="heading-24">Section header</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li><a href="#">Go to image elements context pages to get more detail ></a></li>
      <li><a href="#">See image element examples outside of the service manual ></a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element  ></a>
  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-images -->

<div id="guide-data">
  <h2 class="heading-36">Data</h2>
  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li>Data is recommended as an alternative to using photography.</li>
  </ul>
  

  <h3 class="heading-24">Large data</h3>
  <div class="example">
    <div class="grid grid-1-2">
      <div class="inner-block">
        
        <div class="data">
          <h2 class="data-80">24</h2>
          <p>Ministerial departments</p>
        </div>
        
      </div>
    </div>
    <div class="grid grid-1-2">
      <div class="inner-block">
        
        <div class="data">
          <h2 class="data-80">80px</h2>
          <p>16px</p>
        </div>
        
      </div>
    </div>
  </div>

  <h3 class="heading-24">Small data</h3>
  <div class="example">
    <div class="grid grid-1-2">
      <div class="inner-block">
        
        <div class="data">
          <h2 class="data-48">56/154</h2>
          <p>on GOV.UK</p>
        </div>
        
      </div>
    </div>
    <div class="grid grid-1-2">
      <div class="inner-block">
        
        <div class="data">
          <h2 class="data-48">48px</h2>
          <p>16px</p>
        </div>
        
      </div>
    </div>
  </div>

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li><a href="#">Go to data elements context pages to get more detail ></a></li>
      <li><a href="#">See data element examples outside of the service manual ></a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element  ></a>
  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-data -->

<div id="guide-forms">
  <h2 class="heading-36">Forms</h2>
  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li>Hint text should sit above the form field.</li> 
    <li>Indents are used used to highlight supporting information.</li>
    <li>Large hit area radio buttons/check boxes can be used for both touch and mouse.</li>
    <li>If there are more large hit area 2 buttons they should be stacked.</li>
    <li>Avoid placeholder text in fields if copy is needed you should use hint text. 
        (is there a link to research/blog on this)</li>
    <li>Avoid using dropdowns instead we recommend; radio buttons, using predictive fields (good for long lists like countries) and checkboxes.</li>
  </ul>
  
  <h3 class="heading-24">Form group - spacing/grouping of form elements</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <h3 class="heading-24">Form input</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <h3 class="heading-24">Form inputs stacked and horizontal</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <h3 class="heading-24">Form label</h3>
  <p>
    Labels should be aligned above their controls.
  </p>
  <div class="example">
    <div class="inner-block">
      <form action="get" class="form">
        <fieldset>
          <div class="form-group">
            <label for="full-name" class="form-label">Full name</label>
            <input type="text" class="form-control" id="full-name">
          </div>
        </fieldset>
      </form>
    </div>
  </div>

  <h3 class="heading-24">Hint text & example text</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <h3 class="heading-24">Radio buttons</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <h3 class="heading-24">Checkboxes</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <h3 class="heading-24">Large hit area radio buttons/checkboxes</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <h3 class="heading-24">Progressive disclosure</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>
  
  <h3 class="heading-24">Inset text</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li><a href="#">Go to form elements context pages to get more detail ></a></li>
      <li><a href="{{ site.baseurl}}/example/form.html">See form element examples outside of the service manual ></a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element  ></a>
  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-forms -->

<div id="guide-buttons">
  <h2 class="heading-36">Buttons</h2>
  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li></li>
  </ul>
  
  <h3 class="heading-24">Start button</h3>
  <div class="example">
    <div class="inner-block">
      <button class="button">Start button</button>
    </div>
  </div>

  <h3 class="heading-24">Primary button</h3>
  <div class="example">
    <div class="inner-block">
      <button class="button">Primary button</button>
    </div>
  </div>

  <h3 class="heading-24">Secondary (back) button</h3>
  <div class="example">
    <div class="inner-block">
      <button class="button-link">Secondary button</button>
      <a class="button-link" href="{{ site.baseurl}}/example/form.html">Link</a>
    </div>
  </div>

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li><a href="#">Go to button elements context pages to get more detail ></a></li>
      <li><a href="#">See button element examples outside of the service manual ></a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element  ></a>
  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-buttons -->

<div id="guide-errors">
  <h2 class="heading-36">Errors</h2>
  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li></li>
  </ul>

  <h3 class="heading-24">Confirmations</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <h3 class="heading-24">Error messages</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <h3 class="heading-24">Form validation errors</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>
  <h3 class="heading-24">Highlight styles for form fields with errors</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>
    <h3 class="heading-24">Inline error messaging</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li><a href="#">Go to error elements context pages to get more detail ></a></li>
      <li><a href="#">See errror element examples outside of the service manual ></a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element  ></a>
  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-errors -->

<div id="guide-icons">
  <h2 class="heading-36">Icons</h2>
  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li>Avoid using icons.</li>
    <li>When icons are necessary ensure they are clear, simple and help to convey information more clearly than text alone could.</li>
    <li>When using icons we recommend where possible that text is also used.</li>
  </ul>
  
  <h3 class="heading-24">Section header</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <h3 class="heading-24">Section header</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li><a href="#">Go to icon elements context pages to get more detail ></a></li>
      <li><a href="#">See icon element examples outside of the service manual ></a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element  ></a>
  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-icons -->

<div id="guide-header-footer">
  <h2 class="heading-36">Header and footer</h2>
  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li></li>
  </ul>
  
  <h3 class="heading-24">Section header</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <h3 class="heading-24">Section header</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li><a href="#">Go to header and footer context pages to get more detail ></a></li>
      <li><a href="#">See header and footer examples outside of the service manual ></a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element  ></a>
  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-header -->

<div id="guide-status">
  <h2 class="heading-36">Status</h2>
  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li></li>
  </ul>

  <h3 class="heading-24">Section header</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <h3 class="heading-24">Section header</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li><a href="#">Go to stautus elements context pages to get more detail ></a></li>
      <li><a href="#">See status element examples outside of the service manual ></a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element  ></a>
  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-status -->
