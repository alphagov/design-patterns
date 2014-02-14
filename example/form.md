---
layout: example
document-type: Example
title: Forms
phases:
  - alpha
custom-css: 'example-form'
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
            <label class="form-label" for="full-name">Full name</label>
            <input type="text" class="form-control" id="full-name">
          </div>

          <div class="form-group">
            <label class="form-label" for="job-title">Job title</label>
            <input type="text" class="form-control" id="job-title">
          </div>

          <div class="form-group">
            <label class="form-label" for="telephone-number">Telephone number</label>
            <input type="text" class="form-control" id="telephone-number">
            <span class="form-hint">Include your country code</span>
          </div>

          <div class="form-group">
            <label  class="form-label" for="email-address">Email address</label>
            <input type="text" class="form-control" id="email-address">
          </div>
          
          <div class="form-group">
            <input type="submit" class="button" value="Next">
            <button class="button-link">Back</button>
          </div>
          
        </fieldset>
        
        <!--
        <fieldset>
          
          <legend class="heading-24">
            Where do you live?
          </legend>

          <div class="form-group">
            <label class="form-label form-label-selectable">
              <input type="radio" name="radio-group" value="England" class="radio">
              <span>England</span>
            </label>
          </div>

          <div class="form-group">
            <label class="form-label form-label-selectable">
              <input type="radio" name="radio-group" value="Scotland" class="radio">
              <span>Scotland</span>
            </label>
          </div>

          <div class="form-group">
            <label class="form-label form-label-selectable">
              <input type="radio" name="radio-group" value="Wales" class="radio">
              <span>Wales</span>
            </label>
          </div>
          
        </fieldset>
      -->
      
      </form>
      
    </div><!-- /.inner-block -->
  </div><!-- /.grid -->
</div><!-- /.grid-wrapper -->
