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
        
        <!-- Basic form example -->
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

          <!-- Primary and secondary buttons -->
          <div class="form-group">
            <input type="submit" class="button" value="Next">
            <button class="button-link">Back</button>
          </div>
        
        </fieldset>

        <!-- Compound form controls -->
        <fieldset>

          <legend class="heading-24">
            Compound form controls
          </legend>

           <div class="form-group form-group-compound">
            <label class="form-label" for="address-line-1">Address</label>
            <input type="text" class="form-control" id="address-line-1">
          </div>

          <div class="form-group form-group-compound">
            <label class="form-label" for="address-line-2">Address line 2</label>
            <input type="text" class="form-control" id="address-line-2">
          </div>

          <div class="form-group">
            <label class="form-label" for="postcode">Postcode</label>
            <input type="text" class="form-control form-control-1-8" id="postcode">
          </div>

        </fieldset>
        
        <!-- Block form layout (radio buttons & checkboxes) -->
        <fieldset>
          
          <legend class="heading-24">
            Block layout
          </legend>

          <!-- Radio buttons -->
          <div class="form-group form-group-block">

            <div class="form-radio">
              <label for="radio-option-1">
                <input id="radio-option-1" type="radio" name="option-radio" value="">
                Radio option 1
              </label>
            </div>
            <div class="form-radio">
              <label for="radio-option-2">
                <input id="radio-option-2" type="radio" name="option-radio" value="">
                Radio option 2
              </label>
            </div>

          </div>

          <!-- Checkboxes -->
          <div class="form-group form-group-block">

            <div class="form-checkbox">
              <label for="checkbox-option-1">
                <input id="checkbox-option-1" type="checkbox" value="">
                Checkbox option 1
              </label>
            </div>
            <div class="form-checkbox">
              <label for="checkbox-option-2">
                <input id="checkbox-option-2" type="checkbox" value="">
                Checkbox option 2
              </label>
            </div>
          
          </div>

        </fieldset>
      
        <!-- Inline form layout (radio buttons & checkboxes) -->
        
        <fieldset>
          
          <legend class="heading-24">
            Inline layout
          </legend>

          <!-- Radio buttons -->
          <div class="form-group form-group-inline">

            <div class="form-radio">
              <label for="radio-option-3">
                <input id="radio-option-3" type="radio" name="option-radio" value="">
                Radio option 1
              </label>
            </div>
            <div class="form-radio">
              <label for="radio-option-4">
                <input id="radio-option-4" type="radio" name="option-radio" value="">
                Radio option 2
              </label>
            </div>

          </div>

        </fieldset>

        <fieldset>
          
          <!-- Checkboxes -->
          <div class="form-group form-group-inline">

            <div class="form-checkbox">
              <label for="checkbox-option-3">
                <input id="checkbox-option-3" type="checkbox" value="">
                Checkbox option 1
              </label>
            </div>
            <div class="form-checkbox">
              <label for="checkbox-option-4">
                <input id="checkbox-option-4" type="checkbox" value="">
                Checkbox option 2
              </label>
            </div>

          </div>

        </fieldset>
        
        <!-- Indented form content -->

        <fieldset>
          
          <legend class="heading-24">
            Indented form content
          </legend>

          <div class="form-group form-group-indent">
            <div class="text">
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna.</p>

              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
          </div>
        </fieldset>
      
      </form>
      
    </div><!-- /.inner-block -->
  </div><!-- /.grid -->
</div><!-- /.grid-wrapper -->
