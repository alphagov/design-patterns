---
layout: example
document-type: Guide
title: Form example
phases:
  - alpha
custom-css: 'example-form'
breadcrumb:
  -
    title: Home
    url: https://www.gov.uk/service-manual
  -
    title: New design guides
    url: /
  -
    title: Examples
    url: /example/
---

<div class="grid-wrapper">
  <div class="grid">
    <div class="inner-block">

      <h1 class="heading-48">
        <span class="heading-27">{{ page.document-type }}</span>
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
            <button class="button-secondary">Back</button>
          </div>
          
        </fieldset>
        
      </form>
      
    </div><!-- /.inner-block -->
  </div><!-- /.grid -->
</div><!-- /.grid-wrapper -->
