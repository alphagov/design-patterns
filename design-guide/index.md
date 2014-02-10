---
layout: template-design-guide
title: Design style guide
published: 10 January 2014
updated: 3 February 2014
phases:
  - alpha
---

<div class="guide">
  <p>Use this guide to help make your service look consistent with the rest of GOV.UK.</p>
</div>

1. **[Typography](#guide-typography)**
2. **[Grids](#guide-grid)**
3. **[Images](#guide-images)**
4. **[Data](#guide-data)**
5. **[Colour](#guide-colour)**

<!-- Typography -->
<div class="guide" id="guide-typography">
  <h2 class="heading-36 guide-header">1. Typography</h2>
  <p>
    The GOV.UK design is mostly about the typography. Tell people what they need to do, in words that they understand. Make the words big enough so they are comfortable to read.
  </p>
  <p>
    GOV.UK uses the typeface New Transport, an update of Transport which was designed in the late fifties/early sixties for for Britain’s national motorway and road sign system. It's designed to be highly legible in all sorts of extreme conditions; in the rain, at night, at speed. Read more about it on <a href="https://gds.blog.gov.uk/2012/07/05/a-few-notes-on-typography/">Ben's blog post</a>.
  </p>
</div>

<!-- Typography : Body copy -->
<div class="guide" id="guide-typography-copy">
  <h3 class="heading-24 guide-subheader">Body copy</h3>
</div>

<div class="example">
  <div class="inner-block">
    
    <div class="text">
      <h4 class="heading-19">
        If you’re a motor trader. <em>19px</em>
      </h4>
      <p>
        Motor traders don’t need to make a SORN on a vehicle if all the following apply: <em>19px</em> 
      </p>
    </div>
    
  </div>
</div>
<div class="guide">
  <p>
    Body copy is the main content of your web page. In most cases we'd advise:
  </p>
  <ul>
    <li>the body copy should be the main focus of the page. on desktop computers that means 66.6% page width or wider</li>
    <li>use the 19px font size for paragraph and caption text</li>
    <li>try to keep line lengths beneath about 75 characters</li>
  </ul>
</div>

<!-- Typography : Page titles -->
<div class="guide" id="guide-typography-titles">
  <h3 class="heading-24 guide-subheader">Page titles</h3>
</div>

<div class="example">
  <div class="inner-block">
    
    <div class="text">
      <h1 class="heading-48">Driving and transport <em>48px</em></h1>
      <p>
        Buy or renew your tax disc (vehicle licence) online - get tax for your car, motorbike, lorry, bus or other vehicle that needs a tax disc. <em>19px</em>
      </p>
    </div>
    
  </div>
</div>

<!-- Typography : Page subtitles -->
<div class="guide" id="guide-typography-subtitles">
  <h3 class="heading-24 guide-subheader">Page subtitles</h3>
</div>

<div class="example">
  <div class="inner-block">
    
    <div class="text">
      <h2 class="heading-36">
        Disability exemption <em>36px</em>
      </h2>
      <p>
        You may be exempt or pay a reduced amount of vehicle tax if you receive certain benefits because of your disability. Find out if you’re eligible and how to apply. <em>19px</em>
      </p>
      
      <h3 class="heading-24">
        Disability exemption <em>24px</em>
      </h3>
      <p>
        You may be exempt or pay a reduced amount of vehicle tax if you receive certain benefits because of your disability. Find out if you’re eligible and how to apply. <em>19px</em>
      </p>
      
    </div>
    
  </div>
</div>

<!-- Typography :  -->
<div class="guide guide-end">
  <h3 class="heading-24 guide-subheader">Take a look at the examples</h3>
  <p>
    Here's an example showing the <a href="{{ site.baseurl}}/example/typography.html">basic typography styles</a>.
  </p>
  <p>
    We're also using a <code>.text</code> class to wrap text blocks, setting a maximum width to prevent lines from getting too long.
  </p>
</div>

<!-- Grid -->
<div class="guide" id="guide-grid">
  <h2 class="heading-36 guide-header">2. Grids</h2>
  <p>
    Tablet or desktop layouts use either a three or four column fluid grid. 
  </p>
</div>

<!-- Grid : Example -->
<div class="guide" id="guide-grid-2-col">
  <h3 class="heading-24 guide-subheader">Two columns</h3>
</div>

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

<!-- Grid : Example -->
<div class="guide" id="guide-grid-3-col">
  <h3 class="heading-24 guide-subheader">Three equal columns</h3>
</div>

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

<!-- Grid : Example -->
<div class="guide" id="guide-grid-4-col">
  <h3 class="heading-24 guide-subheader">Four equal columns</h3>
</div>

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

<!-- Grid : Take a look at the examples -->
<div class="guide guide-end">
  <h3 class="heading-24 guide-subheader">Take a look at the examples</h3>
  <p>
    Here's a page which shows how to create the above <a href="{{ site.baseurl}}/example/grid.html">grid layout</a>. Use this example to get started structuring your page content.
  </p>
</div>


<!-- Images -->
<div class="guide" id="guide-images">
  <h2 class="heading-36 guide-header">3. Images</h2>
  <p>
    Avoid using images, GOV.UK is for services and information, not photographs. If images cannot be avoided they should be landscape, 3:2 aspect ratio.
  </p>
</div>

<!-- Images : Example -->
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


<!-- Data -->
<div class="guide" id="guide-data">
  <h2 class="heading-36 guide-header">4. Data</h2>
  <p>
    Data is recommended as an alternative to using photography.
  </p>
</div>

<!-- Data : Example -->
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

<!-- Data : Example -->
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


<!-- Colour palette -->
<div class="guide" id="guide-colour">
  <h2 class="heading-36 guide-header">5. Colour</h2>
  <p>
    Text should only be set in black with secondary text in grey. Links should be blue and buttons or dialog boxes should have text in white.
  </p>
  <p>
     The GOV.UK Service Design Manual shows HEX values and Sass variable names for the <a href="https://www.gov.uk/service-manual/user-centered-design/resources/colour-palettes.html">GOV.UK colour palette</a>. You can find Sass variables for the GOV.UK colour palette in the <a href="https://github.com/alphagov/govuk_frontend_toolkit#colours">GOV.UK front end toolkit</a>.
   </p>
</div>

<!-- Colour palette : Example -->
<div class="example">
  <div class="inner-block">
    <p>
      <a href="#">Link colour</a>
    </p>
    <code>
      HEX: #2e3191 <br>
      Sass variable: $link-colour
    </code>
    <p class="text-secondary">
      Secondary text colour
    </p>
    <code>
      HEX: #6F777B <br>
      Sass variable: $secondary-text-colour
    </code>
    <div class="swatch colour-hm-government">
    </div>
    <code>
      HM Government <br>
      HEX: #0076c0 <br>
      Sass: $hm-government
    </code>
    <button class="button">Button</button>
    <code>
      Sass: $green<br>
      Hex: #006435
    </code>
  </div>
</div>

<!-- Buttons -->
<!-- <div class="guide" id="guide-forms">
  <h2 class="guide-header">6. Buttons</h2>
  <p>
    Primary action buttons are green, secondary action buttons are grey, irreversible action buttons are red.
  </p>
</div> -->

<!-- Buttons : Example-->
<!-- <div class="example">
  <div class="inner-block">
    <a href="#" class="button">Primary action</a>
    <a href="#" class="button button-secondary">Secondary action</a>
    <a href="#" class="button button-warning">Warning action</a>
  </div>
</div> -->

<!-- Buttons : Get the styles -->
<!-- <div class="guide guide-end">
  <h3 class="guide-subheader">Get the styles</h3>
  <p>
    Here's an <a href="{{ site.baseurl}}/example/form.html">example form using the button styles</a>.
  </p>
</div> -->