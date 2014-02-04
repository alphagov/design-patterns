---
layout: template-example
document-type: Guide
title: Form example
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

      <h1>
        <span>{{ page.document-type }}</span>
        {{ page.title }}
      </h1>

      <form action="get" class="form">
        <fieldset>
          
          <legend class="heading-24">
            Contact details
          </legend>
          <p class="text-secondary">These will not be made public</p>
          
          <div class="form-group">
            <label for="">Full name</label>
            <input type="text" class="form-control">
          </div>

          <div class="form-group">
            <label for="">Job title</label>
            <input type="text" class="form-control">
          </div>

          <div class="form-group">
            <label for="">Telephone number</label>
            <input type="text" class="form-control">
            <span class="hint">Include your country code</span>
          </div>

          <div class="form-group">
            <label for="">Email address</label>
            <input type="text" class="form-control">
          </div>
          
          <div class="form-group">
            <input type="submit" class="button" value="Next">
          </div>
          
          <a href="#" class="back">Back</a>
          
        </fieldset>
        
      </form>
      
    </div><!-- /.inner-block -->
  </div><!-- /.grid -->
</div><!-- /.grid-wrapper -->
