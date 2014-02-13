---
layout: default
title: Design style guide
published: 10 January 2014
updated: 3 February 2014
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
  <p>This guide explains how to make your service look consistent with the rest of GOV.UK.
    For advice on how best to implement this style guide, <a href="../example/">see the examples page</a>.</p>
</div>

1. **[Typography](#guide-typography)**
2. **[Grids](#guide-grid)**
3. **[Images](#guide-images)**
4. **[Data](#guide-data)**
5. **[Colour](#guide-colour)**
5. **[Forms](#guide-forms)**

<!-- Typography -->
<div class="text" id="guide-typography">
  <h2 class="heading-36">1. Typography</h2>
  <p>
    The GOV.UK design is mostly about the typography. Tell people what they need to do, in words that they understand. Make the words big enough so they are comfortable to read.
  </p>
  <p>
    GOV.UK uses the typeface New Transport, an update of Transport which was designed in the late fifties/early sixties for for Britain’s national motorway and road sign system. It's designed to be highly legible in all sorts of extreme conditions; in the rain, at night, at speed. Read more about it on <a href="https://gds.blog.gov.uk/2012/07/05/a-few-notes-on-typography/">Ben's blog post</a>.
  </p>
</div>

<!-- Typography : Body copy -->
<div class="text" id="guide-typography-copy">
  <h3 class="heading-24">Body copy</h3>
</div>

<div class="example">
  <div class="inner-block">
    
    <div class="text">
      <h4 class="heading-19">
        If you’re a motor trader. <em class="highlight">19px</em>
      </h4>
      <p>
        Motor traders don’t need to make a SORN on a vehicle if all the following apply: <em class="highlight">19px</em> 
      </p>
    </div>
    
  </div>
</div>

<div class="text">
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
<div class="text" id="guide-typography-titles">
  <h3 class="heading-24">Page titles</h3>
</div>

<div class="example">
  <div class="inner-block">
    
    <div class="text">
      <h1 class="heading-48">Driving and transport <em class="highlight">48px</em></h1>
      <p>
        Buy or renew your tax disc (vehicle licence) online - get tax for your car, motorbike, lorry, bus or other vehicle that needs a tax disc. <em class="highlight">19px</em>
      </p>
    </div>
    
  </div>
</div>

<!-- Typography : Page subtitles -->
<div class="text" id="guide-typography-subtitles">
  <h3 class="heading-24">Page subtitles</h3>
</div>

<div class="example">
  <div class="inner-block">
    
    <div class="text">
      <h2 class="heading-36">
        Disability exemption <em class="highlight">36px</em>
      </h2>
      <p>
        You may be exempt or pay a reduced amount of vehicle tax if you receive certain benefits because of your disability. Find out if you’re eligible and how to apply. <em class="highlight">19px</em>
      </p>
      
      <h3 class="heading-24">
        Disability exemption <em class="highlight">24px</em>
      </h3>
      <p>
        You may be exempt or pay a reduced amount of vehicle tax if you receive certain benefits because of your disability. Find out if you’re eligible and how to apply. <em class="highlight">19px</em>
      </p>
      
    </div>
    
  </div>
</div>

<!-- Typography :  -->
<div class="text">
  <h3 class="heading-24">Take a look at the examples</h3>
  <p>
    Here's an example showing the <a href="{{ site.baseurl}}/example/typography.html">basic typography styles</a>.
  </p>
  <p>
    We're also using a <code>.text</code> class to wrap text blocks, setting a maximum width to prevent lines from getting too long.
  </p>
</div>

<!-- Grid -->
<div class="text" id="guide-grid">
  <h2 class="heading-36">2. Grids</h2>
  <p>
    Tablet or desktop layouts use either a three or four column fluid grid. 
  </p>
</div>

<!-- Grid : Example -->
<div class="text" id="guide-grid-2-col">
  <h3 class="heading-24">Two columns</h3>
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
<div class="text" id="guide-grid-3-col">
  <h3 class="heading-24">Three equal columns</h3>
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
<div class="text" id="guide-grid-4-col">
  <h3 class="heading-24">Four equal columns</h3>
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
<div class="text">
  <h3 class="heading-24">Take a look at the examples</h3>
  <p>
    Here's a page which shows how to create the above <a href="{{ site.baseurl}}/example/grid.html">grid layout</a>. Use this example to get started structuring your page content.
  </p>
</div>


<!-- Images -->
<div class="text" id="guide-images">
  <h2 class="heading-36">3. Images</h2>
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
  <h2 class="heading-36">4. Data</h2>
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
<div class="text" id="guide-colour">
  <h2 class="heading-36">5. Colour</h2>
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
    <div class="swatch bg-hm-government">
    </div>
    <code>
      HM Government <br>
      HEX: #0076c0 <br>
      Sass: $hm-government
    </code>
  </div>
</div>

<!-- Forms -->
<div class="text" id="guide-forms">
  <h2 class="heading-36">6. Forms</h2>
  <p>As explained in their <a href="http://www.w3.org/TR/html51/forms.html#the-fieldset-element">HTML5 specification section</a> fieldsets are used to break up forms into logical sections.</p>
</div>

<div class="text">
  <h3 class="heading-24">Labels</h3>
  <p>
    By default labels should be aligned above their controls.
  </p>
</div>

<!-- Forms : Example-->
<div class="example">
  <div class="inner-block">
    <form action="get" class="form">
      <fieldset>
        <div class="form-group">
          <label for="">Full name</label>
          <input type="text" class="form-control" />
        </div>
      </fieldset>
    </form>
  </div>
</div>

<div class="text">
  <h3 class="heading-24">Buttons</h3>
  <p>
     Buttons use the button mixin defined in the <a href="https://github.com/alphagov/govuk_frontend_toolkit#buttons">GOV.UK front end toolkit</a>. 
  </p>
  <h4 class="heading-19">Changing the secondary grey button style</h4>
  <p>
    The grey button has a couple of issues - when positioned next to our primary green button some users assume that the grey means the button is disabled. 

    To others, it looks more like a default OS button than the green one, which can be confusing.
  </p>
  <p>
    To remove this confusion, we're changing the grey button to look like a link, but with appropriate whitespace so that it can be positioned consistently alongside the primary green buttons.
  </p>
  <p>
    Yellow focus states for all buttons are also shown.
  </p>
</div>

<!-- Buttons : Example-->
<div class="example">
  <div class="inner-block">
    <button class="button">Primary button</button>
    <button class="button-link">Secondary button</button>
    <a class="button-link" href="{{ site.baseurl}}/example/form.html">Link</a>
  </div>
</div>

<!-- Forms : Take a look at the examples -->
<div class="text">
  <h3 class="heading-24">Take a look at the examples</h3>
  <p>
      Here's an <a href="{{ site.baseurl}}/example/form.html">example form</a>.
  </p>
</div>

