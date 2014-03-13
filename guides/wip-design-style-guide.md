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
    This guide explains how to make your service look consistent with the rest of GOV.UK.
  </p>
  <p>
    GOV.UK Elements form the building blocks from which all pages are made.
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
    <li>We recommend working for mobile, or small screens first, then breaking content into columns as screen width increases</li>
    <li>Small screens start full width, with content stacked and can expand out into columns</li>
    <li>Commonly used grid unit proportions are; two equal columns, three equal columns, four equal columns</li>
    <li>Grid gutters are 15px for smaller screens, increasing to 30px to align with the header and footer</li>
    <li>Text is recommended to be no longer than 75 characters, to increase legibility</li>
    <li>Spacing between elements is commonly multiples of 15px</li>
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
  <ul class="list-bullet">
    <li>Spacing is commonly multiples of 15px, which is set as the Sass <code>$gutter-half</code> variable.</li>
    <li>Common spacing values are: 10, 15, 30, 45 and 60px.</li>
    <li>Horizontal rules can be used to create extra space between paragraph content.</li>
  </ul>

  <h3 class="heading-24">Breakpoints</h3>
  <p>
    Media queries are used to set breakpoints for small, medium and large screens. These breakpoints are mobile, tablet and desktop. 
  </p>
  <ul class="list-bullet">
    <li><code>mobile</code> is used for to hide small screen styles from desktop browsers, by setting a maximum width of 640px.</li>
    <li><code>tablet</code> is used to adjust styles for tablet and up, starting at 641px.</li>
    <li><code>desktop</code> styles apply from a minimum width of 769px.</li>
  </ul>
  <p>The media queries for these breakpoints can be found in the GOV.UK frontend toolkit <a href="#">_conditionals.scss</a> file.</p>

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li>See the example page: <a href="{{ site.baseurl}}/example/grid.html">Grid layout</a></li>
    </ul>

    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element</a>

  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-layout -->

<div id="guide-typography">
  <h2 class="heading-36">Typography</h2>

  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li>Body copy should be the main focus of the page</li>
    <li>19px for paragraph and caption text</li>
    <li>Recommended width for body text is 75 characters for legibility</li>
    <li>For common font colours, see the <a href="#guide-colour">colour palette</a></li>
    <li>Create clear hierarchy using headings so content is easy to scan</li>
    <li>Use headings in a uniform way across your service</li>
    <li>Avoid using bold text inline</li>
    <li>Avoid italics</li>
    <li>Smaller text sizes (14px, 12px, 10px) can be used for more specialist/internal user content, always ensure that there is a real user need</li>
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

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li><a href="/service-manual/user-centered-design/resources/typography.html">Read more about GOV.UK Typography</a></li>
      <li>See the example page: <a href="{{ site.baseurl}}/example/typography.html">Typography</a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element</a>
  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-typography -->

<div id="guide-colour">
  <h2 class="heading-36">Colour</h2>
  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li>Text should only be set in black with secondary text in grey. </li>
    <li>Links should be blue and buttons or dialog boxes should have text in white.</li>
    <li>Use Sass variables in case colour values need to be updated. The variables are defined in <a href="https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_colours.scss">colours.scss</a> in the GOV.UK front end toolkit.</li>
  </ul>

  <h3 class="heading-24">Colour palette <br> <span class="text-secondary">HEX values and Sass variable names</span></h3>
  <div class="example">
    <div class="inner-block">
      
      <div class="cf">
        <h3 class="heading-24">Text and common colours</h3>
        
        <div class="swatch-wrapper">
          
          <h4 class="heading-19">Text</h4>
            
          <div class="swatch swatch-text-colour"></div>
          <ul>
            <li><b>#0B0C0C</b></li>
            <li>$text-colour</li>
          </ul>

          <div class="swatch swatch-text-secondary"></div>
          <ul>
            <li><b>#6F777B</b></li>
            <li>$secondary-text-colour</li>
          </ul>

          <div class="swatch swatch-page-colour"></div>
          <ul>
            <li><b>#FFFFFF</b></li>
            <li>$page-colour</li>
          </ul>

        </div>

        <div class="swatch-wrapper">
          
          <h4 class="heading-19">Links</h4>
            
          <div class="swatch swatch-link-colour"></div>
          <ul>
            <li><b>#005ea5</b></li>
            <li>$link-colour</li>
          </ul>

          <div class="swatch swatch-link-colour-visited"></div>
          <ul>
            <li><b>#005ea5</b></li>
            <li>$link-visited</li>
          </ul>

          <div class="swatch swatch-link-colour-hover"></div>
          <ul>
            <li><b>#2e8aca</b></li>
            <li>$link-hover-colour</li>
          </ul>

        </div>

        <div class="swatch-wrapper">
          
          <h4 class="heading-19">Backgrounds</h4>
            
          <div class="swatch swatch-border-colour"></div>
          <ul>
            <li><b>#BFC1C3</b></li>
            <li>$border-colour</li>
          </ul>

          <div class="swatch swatch-panel-colour"></div>
          <ul>
            <li><b>#DEE0E2</b></li>
            <li>$panel-colour</li>
          </ul>

          <div class="swatch swatch-highlight-colour"></div>
          <ul>
            <li><b>#F8F8F8</b></li>
            <li>$highlight-colour</li>
          </ul>

        </div>
        <div class="swatch-wrapper">
          
          <h4 class="heading-19">Grey to white</h4>
            
          <div class="swatch swatch-black"></div>
          <ul>
            <li><b>#0B0C0C</b></li>
            <li>$black</li>
          </ul>

          <div class="swatch swatch-grey-1"></div>
          <ul>
            <li><b>#BFC1C3</b></li>
            <li>$grey-1</li>
          </ul>

          <div class="swatch swatch-grey-2"></div>
          <ul>
            <li><b>#BFC1C3</b></li>
            <li>$grey-2</li>
          </ul>

        </div>
        <div class="swatch-wrapper">
          
          <h4 class="heading-19 invisible">Grey to white</h4>
            
          <div class="swatch swatch-grey-3"></div>
          <ul>
            <li><b>#DEE0E2</b></li>
            <li>$grey-3</li>
          </ul>

          <div class="swatch swatch-grey-4"></div>
          <ul>
            <li><b>#F8F8F8</b></li>
            <li>$grey-4</li>
          </ul>

          <div class="swatch swatch-white"></div>
          <ul>
            <li><b>#FFFFFF</b></li>
            <li>$white</li>
          </ul>

        </div>

      </div>
      
      <h3 class="heading-24">Standard colour palette</h3>
      
      <div class="swatch-wrapper">
        
        <h4 class="heading-19">Purple</h4>
          
        <div class="swatch swatch-purple"></div>
        <ul>
          <li><b>#2e358b</b></li>
          <li>$purple</li>
        </ul>

        <div class="swatch swatch-purple-mid"></div>
        <ul>
          <li><b>#9799c4</b></li>
          <li>$purple-50</li>
        </ul>

        <div class="swatch swatch-purple-light"></div>
        <ul>
          <li><b>#d5d6e7</b></li>
          <li>$purple-25</li>
        </ul>

      </div>

      <div class="swatch-wrapper">

        <h4 class="heading-19">Mauve</h4>
          
        <div class="swatch swatch-mauve"></div>
        <ul>
          <li><b>#6f72af</b></li>
          <li>$mauve</li>
        </ul>

        <div class="swatch swatch-mauve-mid"></div>
        <ul>
          <li><b>#b7b9d7</b></li>
          <li>$mauve-50</li>
        </ul>

        <div class="swatch swatch-mauve-light"></div>
        <ul>
          <li><b>#e2e2ef</b></li>
          <li>$mauve-25</li>
        </ul>

      </div>

      <div class="swatch-wrapper">

        <h4 class="heading-19">Fuschia</h4>
        <div class="swatch swatch-fuschia"></div>
        <ul>
          <li><b>#912b88</b></li>
          <li>$fuschia</li>
        </ul>
        <div class="swatch swatch-fuschia-mid"></div>
        <ul>
          <li><b>#c994c3</b></li>
          <li>$fuschia-50</li>
        </ul>
        <div class="swatch swatch-fuschia-light"></div>
        <ul>
          <li><b>#e9d4e6</b></li>
          <li>$fuschia-25</li>
        </ul>

      </div>

      <div class="swatch-wrapper">

        <h4 class="heading-19">Pink</h4>
        <div class="swatch swatch-pink"></div>
        <ul>
          <li><b>#d53880</b></li>
          <li>$pink</li>
        </ul>
        <div class="swatch swatch-pink-mid"></div>
        <ul>
          <li><b>#eb9bbe</b></li>
          <li>$pink-50</li>
        </ul>
        <div class="swatch swatch-pink-light"></div>
        <ul>
          <li><b>#f6d7e5</b></li>
          <li>$pink-25</li>
        </ul>

      </div>
      
      <div class="swatch-wrapper">

        <h4 class="heading-19">Baby pink</h4>
        <div class="swatch swatch-baby-pink"></div>
        <ul>
          <li><b>#f499be</b></li>
          <li>$baby-pink</li>
        </ul>
        <div class="swatch swatch-baby-pink-mid"></div>
        <ul>
          <li><b>#faccdf</b></li>
          <li>$baby-pink-50</li>
        </ul>
        <div class="swatch swatch-baby-pink-light"></div>
        <ul>
          <li><b>#fdebf2</b></li>
          <li>$baby-pink-25</li>
        </ul>

      </div>

      <div class="swatch-wrapper">

        <h4 class="heading-19">Red</h4>
        <div class="swatch swatch-red"></div>
        <ul>
          <li><b>#b10e1e</b></li>
          <li>$red</li>
        </ul>
        <div class="swatch swatch-red-mid"></div>
        <ul>
          <li><b>#d9888c</b></li>
          <li>$red-50</li>
        </ul>
        <div class="swatch swatch-red-light"></div>
        <ul>
          <li><b>#efcfd1</b></li>
          <li>$red-25</li>
        </ul>

      </div>

      <div class="swatch-wrapper">

        <h4 class="heading-19">Mellow red</h4>
        <div class="swatch swatch-mellow-red"></div>
        <ul>
          <li><b>#df3034</b></li>
          <li>$mellow-red</li>
        </ul>
        <div class="swatch swatch-mellow-red-mid"></div>
        <ul>
          <li><b>#ef9998</b></li>
          <li>$mellow-red-50</li>
        </ul>
        <div class="swatch swatch-mellow-red-light"></div>
        <ul>
          <li><b>#f9d6d6</b></li>
          <li>$mellow-red-25</li>
        </ul>

      </div>

      <div class="swatch-wrapper">

        <h4 class="heading-19">Orange</h4>
        <div class="swatch swatch-orange"></div>
        <ul>
          <li><b>#f47738</b></li>
          <li>$orange</li>
        </ul>
        <div class="swatch swatch-orange-mid"></div>
        <ul>
          <li><b>#fabb96</b></li>
          <li>$orange-50</li>
        </ul>
        <div class="swatch swatch-orange-light"></div>
        <ul>
          <li><b>#fde4d4</b></li>
          <li>$orange-25</li>
        </ul>

      </div>

      <div class="swatch-wrapper">

        <h4 class="heading-19">Brown</h4>
        <div class="swatch swatch-brown"></div>
        <ul>
          <li><b>#b58840</b></li>
          <li>$brown</li>
        </ul>
        <div class="swatch swatch-brown-mid"></div>
        <ul>
          <li><b>#dac39c</b></li>
          <li>$brown-50</li>
        </ul>
        <div class="swatch swatch-brown-light"></div>
        <ul>
          <li><b>#f0e7d7</b></li>
          <li>$brown-25</li>
        </ul>

      </div>

      <div class="swatch-wrapper">

        <h4 class="heading-19">Yellow</h4>
        <div class="swatch swatch-yellow"></div>
        <ul>
          <li><b>#ffbf47</b></li>
          <li>$yellow</li>
        </ul>
        <div class="swatch swatch-yellow-mid"></div>
        <ul>
          <li><b>#ffdf94</b></li>
          <li>$yellow-50</li>
        </ul>
        <div class="swatch swatch-yellow-light"></div>
        <ul>
          <li><b>#fff2d3</b></li>
          <li>$yellow-25</li>
        </ul>

      </div>

      <div class="swatch-wrapper">

        <h4 class="heading-19">Green</h4>
        <div class="swatch swatch-green"></div>
        <ul>
          <li><b>#006435</b></li>
          <li>$green</li>
        </ul>
        <div class="swatch swatch-green-mid"></div>
        <ul>
          <li><b>#7fb299</b></li>
          <li>$green-50</li>
        </ul>
        <div class="swatch swatch-green-light"></div>
        <ul>
          <li><b>#cce0d6</b></li>
          <li>$green-25</li>
        </ul>

      </div>

      <div class="swatch-wrapper">

        <h4 class="heading-19">Grass green</h4>
        <div class="swatch swatch-grass-green"></div>
        <ul>
          <li><b>#85994b</b></li>
          <li>$grass-green</li>
        </ul>

        <div class="swatch swatch-grass-green-mid"></div>
        <ul>
          <li><b>#c2cca3</b></li>
          <li>$grass-green-50</li>
        </ul>
        <div class="swatch swatch-grass-green-light"></div>
        <ul>
          <li><b>#e7ebda</b></li>
          <li>$grass-green-25</li>
        </ul>

      </div>

      <div class="swatch-wrapper">

        <h4 class="heading-19">Turquoise</h4>
        <div class="swatch swatch-turquoise"></div>
        <ul>
          <li><b>#28a197</b></li>
          <li>$turquoise</li>
        </ul>
        <div class="swatch swatch-turquoise-mid"></div>
        <ul>
          <li><b>#95d0cb</b></li>
          <li>$turquoise-50</li>
        </ul>
        <div class="swatch swatch-turquoise-light"></div>
        <ul>
          <li><b>#d5ecea</b></li>
          <li>$turquoise-25</li>
        </ul>
      
      </div>

      <div class="swatch-wrapper">

        <h4 class="heading-19">Light blue</h4>
        <div class="swatch swatch-light-blue"></div>
        <ul>
          <li><b>#2b8cc4</b></li>
          <li>$light-blue</li>
        </ul>
        <div class="swatch swatch-light-blue-mid"></div>
        <ul>
          <li><b>#96c6e2</b></li>
          <li>$light-blue-50</li>
        </ul>
        <div class="swatch swatch-light-blue-light"></div>
        <ul>
          <li><b>#d5e8f3</b></li>
          <li>$light-blue-25</li>
        </ul>

      </div>

    </div>
  </div>

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul class="text">
      <li><a href="/service-manual/user-centered-design/resources/colour-palettes.html">Read more about the GOV.UK colour palette</a></li>
      <li>You can find more HEX values and Sass variable names for the GOV.UK colour palette in the <a href="https://github.com/alphagov/govuk_frontend_toolkit#colours">GOV.UK front end toolkit</a>.</a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element</a>
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

  <h3 class="heading-24">Image aspect ratio</h3>
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

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service</li>
      <li>ALPHA Name of service</li>
    </ul>
    <a href="#">Share/submit live services that use this element</a>
  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-images -->

<div id="guide-data">
  <h2 class="heading-36">Data</h2>
  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li>Data is recommended as an alternative to using photography.</li>
    <li>For screenreaders, ensure the data value appears first so it makes sense when read aloud</li>
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
      <li><a href="/service-manual/user-centered-design/data-visualisation.html">Read more about GOV.UK data visualisation</a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service</li>
      <li>ALPHA Name of service</li>
    </ul>
    <a href="#">Share/submit live services that use this element</a>
  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-data -->

<div id="guide-forms">
  <h2 class="heading-36">Forms</h2>
  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li>Hint text should sit above a form field</li> 
    <li>Radio buttons and checkboxes with large hit areas are optimsed for touch and mouse</li>
    <li>For more than two options, radio buttons or checkboxes should appear stacked</li>
    <li>Avoid placeholder text in fields. If copy is needed, instead use hint text</li>
    <li>Avoid using dropdowns. Instead we recommend; radio buttons, using predictive fields (good for long lists like countries) and checkboxes.</li>
    <li>Indents are used within forms to highlight supporting information.</li>
  </ul>
  
  <h3 class="heading-24">Form inputs and labels</h3>
  <p>
    Labels should be aligned above their controls.
  </p>
  <div class="example">
    <div class="inner-block">

       <div class="form-group">
          <label for="full-name" class="form-label">Full name</label>
          <input type="text" class="form-control" id="full-name">
        </div>

    </div>
  </div>
  
  <h3 class="heading-24">Spacing between form elements</h3>
  
  <p class="text">
    A form wrapper, <code>.form-group</code> can be used to enclose a form label and input pair. This will create spacing (45px) between form rows.
  </p>
  <div class="example">
    <div class="inner-block">
      
      <div class="form-group">
        <label class="form-label" for="full-name">Full name</label>
        <p class="form-hint">As shown on your birth certificate or passport</p>
        <input type="text" class="form-control" id="full-name">
      </div>

    </div>
  </div>

  <h3 class="heading-24">Hint text and example text</h3>
  <ul class="list-bullet">
    <li>Form hints should appear above the form control</li>
    <li>Form examples should appear below the form control</li>
  </ul>
  <div class="example">
    <div class="inner-block">

      <div class="form-group">
        <label class="form-label" for="full-name">Full name</label>
        <p class="form-hint">As shown on your birth certificate or passport</p>
        <input type="text" class="form-control" id="full-name">
      </div>

      <div class="form-group">
        <label class="form-label" for="other-names">Any other last names</label>
        <input type="text" class="form-control" id="other-names">
        <p class="form-hint">E.g. your maiden name</p>
      </div>

    </div>
  </div>

  <h3 class="heading-24">Radio buttons</h3>
  <div class="example">
    <div class="inner-block">
      
      <div class="form-radio">
        <label for="radio-option-1c">
          <input id="radio-option-1c" type="radio" name="option-radio" value="">
          Radio option 1
        </label>
      </div>
      <div class="form-radio">
        <label for="radio-option-2c">
          <input id="radio-option-2c" type="radio" name="option-radio" value="">
          Radio option 2
        </label>
      </div>

    </div>
  </div>

  <h3 class="heading-24">Checkboxes</h3>
  <div class="example">
    <div class="inner-block">
      
      <div class="form-checkbox">
        <label for="checkbox-option-1d">
          <input id="checkbox-option-1d" type="checkbox" value="">
          Checkbox option 1
        </label>
      </div>

    </div>
  </div>

  <h3 class="heading-24">Large hit area radio buttons/checkboxes</h3>
  <div class="example">
    <div class="inner-block">
      
      <div class="form-group form-group-block">
        <div class="form-radio">
          <label for="radio-option-1a" class="block-label">
            <input id="radio-option-1a" type="radio" name="option-radio" value="">
            Radio option 1
          </label>
        </div>
        <div class="form-radio">
          <label for="radio-option-2a" class="block-label">
            <input id="radio-option-2a" type="radio" name="option-radio" value="">
            Radio option 2
          </label>
        </div>
      </div>
      <div class="form-group form-group-block">
        <div class="form-checkbox">
          <label for="checkbox-option-3a" class="block-label">
            <input id="checkbox-option-3a" type="checkbox" value="">
            Checkbox option 1
          </label>
        </div>
        <div class="form-checkbox">
          <label for="checkbox-option-4b" class="block-label">
            <input id="checkbox-option-4b" type="checkbox" value="">
            Checkbox option 2
          </label>
        </div>
      </div>

    </div>
  </div>
  
  <h3 class="heading-24">Inset text</h3>
  <div class="example">
    <div class="inner-block">
        
        <div class="form-group form-group-indent">
          <div class="text">
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna.</p>
          </div>
        </div>

    </div>
  </div>
  
  <h3 class="heading-24">Progressive disclosure</h3>
  <div class="example">
    <div class="inner-block">

    </div>
  </div>
    
  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li><a href="#">Get more detail</a></li>
      <li><a href="{{ site.baseurl}}/example/form.html">See an example page</a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service</li>
      <li>ALPHA Name of service</li>
    </ul>
    <a href="#">Share/submit live services that use this element</a>
  </div><!-- / .find-out-more -->
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
      <div class="get-started">
        <a href="https://bluebadge.direct.gov.uk/directgovapply.html" rel="external" class="button" target="_blank">Start now</a>
        <span class="destination"> on the Blue Badge eligibility tool</span>
      </div> 
    </div>
  </div>

  <h3 class="heading-24">Primary button</h3>
  <div class="example">
    <div class="inner-block">
      <button class="button">Primary button</button>
    </div>
  </div>

  <h3 class="heading-24">Disabled primary button</h3>
  <div class="example">
    <div class="inner-block">
      <button class="button disabled">Primary button</button>
    </div>
  </div>

  <h3 class="heading-24">Secondary button</h3>
  <div class="example">
    <div class="inner-block">
      <button class="button-link">Secondary button</button>
      <a class="button-link" href="{{ site.baseurl}}/example/form.html">Link</a>
    </div>
  </div>

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service</li>
      <li>ALPHA Name of service</li>
    </ul>
    <a href="#">Share/submit live services that use this element</a>
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
      <li><a href="#">Get more detail</a></li>
      <li><a href="#">See an example page</a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element</a>
  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-errors -->

<div id="guide-icons">
  <h2 class="heading-36">Icons</h2>
  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li>Avoid using icons.</li>
    <li>When icons are necessary ensure they are clear, simple and help to convey information more clearly than text alone could.</li>
    <li>When using icons we recommend where possible that text is used to accompany the icon, to make it easily understood</li>
  </ul>
  
  <h3 class="heading-24">Section header</h3>
  <div class="example">
    <div class="inner-block">
      
    </div>
  </div>

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li><a href="#">Get more detail</a></li>
      <li><a href="#">See an example page</a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element</a>
  </div><!-- / .find-out-more -->

</div>
<!-- / #guide-icons -->

<div id="guide-header-footer">
  <h2 class="heading-36">Header and footer</h2>
  <h3 class="heading-24">Key points:</h3>
  <ul class="list-bullet text">
    <li>The header and footer are provided as part of the <a href="https://github.com/alphagov/govuk_template">GOV.UK template</a></li>
    <li>The name of the team providing the service should be included in the footer, along with a link to the service blog</li>
  </ul>
  
  <h3 class="heading-24">Header</h3>
  <div class="example">
    <div class="inner-block">
      
      <header role="banner" id="global-header">
        <div class="header-wrapper">
          <div class="header-global">
            <div class="header-logo">
              <a href="https://www.gov.uk/" title="Go to the GOV.UK homepage" id="logo" class="content">
                <img src="{{ site.baseurl}}{{ site.govuk_template_assets }}/images/gov.uk_logotype_crown.png" alt=""> <span>GOV&nbsp;<span>.</span>UK</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <!--end header-->

    </div>
  </div>

  <h3 class="heading-24">Footer</h3>
  <div class="example">
    <div class="inner-block">
      
        <footer class="group js-footer" id="footer" role="contentinfo">

          <div class="footer-wrapper">

            <div class="footer-meta">
              <div class="footer-meta-inner">

                <h2 class="visuallyhidden">Support links</h2>
                <ul>
                  <li><a href="/help">Help</a></li>
                    <li><a href="/help/cookies">Cookies</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/cymraeg">Cymraeg</a></li>
                    <li>Built by the <a href="https://gds.blog.gov.uk/">Government Digital Service</a>
                  </li>
                </ul>

                <div class="open-government-licence">
                  <h2><a href="http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2"><img src="{{ site.baseurl}}{{ site.govuk_template_assets }}/images/open-government-licence_2x.png" alt="OGL"></a></h2>
                  <p>All content is available under the <a href="http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2">Open Government Licence v2.0</a>, except where otherwise stated</p>
                </div>
              </div>

              <div class="copyright">
                <a href="http://www.nationalarchives.gov.uk/information-management/our-services/crown-copyright.htm">&copy; Crown Copyright</a>
              </div>

            </div>
          </div>
        </footer>

    </div>
  </div>

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li><a href="/service-manual/user-centered-design/resources/header-footer.html">Get more detail</a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element</a>
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

  <div class="find-out-more">
    <h3 class="heading-24">Find out more</h3>
    <ul>
      <li><a href="#">Get more detail</a></li>
      <li><a href="#">See an example page</a></li>
    </ul>
    <h4 class="heading-19">Live services that use these elements</h4>
    <ul>
      <li>BETA Name of service ></li>
      <li>ALPHA Name of service ></li>
    </ul>
    <a href="#">Share/submit live services that use this element</a>
  <div>

</div>
<!-- / #guide-status -->
