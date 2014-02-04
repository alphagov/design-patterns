---
layout: template-design-guide
title: Design style guide
published: 10 January 2014
updated: 3 February 2014
phases:
  - alpha
---

<!-- About this guide -->
<div class="guide" id="guide-about">
  <p>Use this guide to help you make your service look consistent with the rest of GOV.UK.</p>
</div>

1. **[Typography](#guide-typography)**
2. **[Grids](#guide-grid)**
3. **[Images](#guide-images)**
4. **[Data](#guide-data)**
5. **[Colour](#guide-colour)**
6. **[Forms](#guide-forms)**

<!-- Typography -->
<div class="guide" id="guide-typography">
  <h2 class="guide-header">1. Typography</h2>
  <p>
    Services should use clear, easy to read type, with consistent styles and a clear hierarchy of information.
  </p>
</div>

<!-- Typography : Start page titles -->
<div class="guide" id="guide-typography-titles">
  <h3 class="guide-subheader">Page titles</h3>
</div>

<div class="example">
  <div class="inner-block">
    
    <div class="text">
      <h1>Driving and transport <em>48px</em></h1>
      <p>
        Buy or renew your tax disc (vehicle licence) online - get tax for your car, motorbike, lorry, bus or other vehicle that needs a tax disc. <em>19px</em>
      </p>
    </div>
    
  </div>
</div>

<!-- Typography : Page subtitles -->
<div class="guide" id="guide-typography-subtitles">
  <h3 class="guide-subheader">Page subtitles</h3>
</div>

<div class="example">
  <div class="inner-block">
    
    <div class="text">
      <h2>
        Disability exemption <em>24px</em>
      </h2>
      <p>
        You may be exempt or pay a reduced amount of vehicle tax if you receive certain benefits because of your disability. Find out if you’re eligible and how to apply. <em>19px</em>
      </p>
    </div>
    
  </div>
</div>

<!-- Typography : Body copy -->
<div class="guide" id="guide-typography-copy">
  <h3 class="guide-subheader">Body copy</h3>
</div>

<div class="example">
  <div class="inner-block">
    
    <div class="text">
      <h3>
        If you’re a motor trader. <em>19px</em>
      </h3>
      <p>
        Motor traders don’t need to make a SORN on a vehicle if all the following apply: <em>19px</em> 
      </p>
    </div>
    
  </div>
</div>

<!-- Typography : Spacing -->
<div class="guide" id="guide-typography-spacing">
  <h3 class="guide-subheader">Putting it all together</h3>
  <p>
    To ensure text is easy to read, aim for 50-60 characters per line.
  </p>
</div>

<div class="example">
  <div class="inner-block">
    
    <div class="text">
      <h1>
        Make a SORN (Statutory Off Road Notification) <em>48px</em>
      </h1>
      <p>
        You can make a SORN (Statutory Off Road Notification) online if you are registered as the vehicle’s keeper. You’ll need the reference number on your V5C registration certificate, V11 or V85/1 reminder form. <em>19px</em>
      </p>

      <h2>
        Penalties <em>24px</em>
      </h2>
      <p>
        If you don’t make a SORN when you have to you’ll automatically be fined £80, will need to get a new tax disc and must pay any tax arrears. You could also get a County Court Judgement against you, be fined a minimum of £1,000 and be liable to prosecution. <em>19px</em>
      </p>

      <h3> If you’re a motor trader. <em>19px</em></h3>

      <p>
        Motor traders don’t need to make a SORN on a vehicle if all the following apply: <em>19px</em>
      </p>
    </div>
    
  </div>
  
</div>

<!-- Typography : Get the styles -->
<div class="guide guide-end">
  <h3 class="guide-subheader">Get the styles</h3>
  <p>
    Here's an example of the above <a href="{{ site.baseurl}}/example/typography.html">basic typography styles</a>. For more control over heading hierarchy, here's the same example <a href="{{ site.baseurl}}/example/typography-classnames.html">using classnames</a>. We're also using a <code>.text</code> class to wrap text blocks, setting a maximum width and to prevent lines from getting too long.
  </p>
</div>

<!-- Grid -->
<div class="guide" id="guide-grid">
  <h2 class="guide-header">2. Grids</h2>
  <p>
    Tablet or desktop layouts use either a three or four column fluid grid. 
  </p>
</div>

<!-- Grid : Example -->
<div class="guide" id="guide-grid-2-col">
  <h3 class="guide-subheader">Two columns</h3>
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
  <h3 class="guide-subheader">Three equal columns</h3>
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
  <h3 class="guide-subheader">Four equal columns</h3>
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

<!-- Grid : Get the styles -->
<div class="guide guide-end">
  <h3 class="guide-subheader">Get the styles</h3>
  <p>
    Here's an example of the above <a href="{{ site.baseurl}}/example/grid.html">grid layout</a>. Use this example to get started structuring your page content.
  </p>
</div>


<!-- Images -->
<div class="guide" id="guide-images">
  <h2 class="guide-header">3. Images</h2>
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
  <h2 class="guide-header">4. Data</h2>
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
  <h2 class="guide-header">5. Colour</h2>
  <p>
    The GOV.UK Service Design Manual shows HEX values and Sass variable names for the <a href="https://www.gov.uk/service-manual/user-centered-design/resources/colour-palettes.html">GOV.UK colour palette</a>. Using the Sass variables in the GOV.UK frontend toolkit is recommended, in case these colours are updated. 
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
  </div>
</div>

<!-- Buttons -->
<div class="guide" id="guide-buttons">
  <h2 class="guide-header">6. Buttons</h2>
  <p>
    Primary action buttons are green, secondary action buttons are grey, irreversible action buttons are red.
  </p>
</div>

<!-- Buttons : Example-->
<div class="example">
  <div class="inner-block">
    <a href="#" class="button">Primary action</a>
    <a href="#" class="button button-secondary">Secondary action</a>
    <a href="#" class="button button-warning">Warning action</a>
  </div>
</div>

<!-- Buttons : Get the styles -->
<div class="guide guide-end">
  <h3 class="guide-subheader">Get the styles</h3>
  <p>
    Here's an <a href="{{ site.baseurl}}/example/form.html">example form using the button styles</a>.
  </p>
</div>