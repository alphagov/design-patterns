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
        
        <!-- Fieldset with hint and example text -->

        <fieldset>
          
          <legend class="heading-36">
            Your personal details
          </legend>

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

        </fieldset>

        <!-- Date of birth -->

        <fieldset class="date-of-birth">

          <legend>
            Date of birth
          </legend>
          <div class="form-group">
            <label for="dob-day">Day</label>
            <input type="text" class="form-control" pattern="[0-9]*" id="dob-day">
          </div>
          <div class="form-group">
            <label for="dob-month">Month</label>
            <input type="text" class="form-control" id="dob-month">
          </div>
          <div class="form-group form-group-year">
            <label for="dob-year">Year</label>
            <input type="text" class="form-control" pattern="[0-9]*" id="dob-year">
          </div>

        </fieldset>
        
        <!-- Compound form controls -->

        <fieldset>

          <legend class="heading-36">
            Your address
          </legend>

           <div class="form-group form-group-compound">
            <label class="form-label" for="address-line-1">Street address</label>
            <input type="text" class="form-control" id="address-line-1">
          </div>

          <div class="form-group">
            <label class="form-label" for="address-line-2" class="visuallyhidden">Second line of address</label>
            <input type="text" class="form-control" id="address-line-2">
          </div>
          
          <div class="form-group">
            <label class="form-label" for="address-town">Town or City</label>
            <input type="text" class="form-control form-control-1-2" id="address-town">
          </div>

          <div class="form-group">
            <label class="form-label" for="address-postcode">Postcode</label>
            <input type="text" class="form-control form-control-1-8" id="address-postcode">
          </div>

        </fieldset>

        <!-- Primary and secondary buttons -->

        <fieldset>
          
          <div class="form-group">
            <input type="submit" class="button" value="Next">
            <button class="button-link">Back</button>
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

          <!-- Checkboxes -->

          <div class="form-group form-group-block">

            <div class="form-checkbox">
              <label for="checkbox-option-1b" class="block-label">
                <input id="checkbox-option-1b" type="checkbox" value="">
                Checkbox option 1
              </label>
            </div>
            <div class="form-checkbox">
              <label for="checkbox-option-2b" class="block-label">
                <input id="checkbox-option-2b" type="checkbox" value="">
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
              <label for="radio-option-3a" class="block-label">
                <input id="radio-option-3a" type="radio" name="option-radio" value="">
                Yes
              </label>
            </div>
            <div class="form-radio">
              <label for="radio-option-4b" class="block-label">
                <input id="radio-option-4b" type="radio" name="option-radio" value="">
                No
              </label>
            </div>

          </div>
          
          <!-- Checkboxes -->

          <div class="form-group form-group-inline">

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

        </fieldset>

        <!-- Block form layout (radio buttons & checkboxes) -->

        <fieldset>
          
          <legend class="heading-24">
            Radio buttons and checkboxes
          </legend>

          <!-- Radio buttons -->

          <div class="form-group form-group-block">

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

          <!-- Checkboxes -->

          <div class="form-group form-group-block">

            <div class="form-checkbox">
              <label for="checkbox-option-1d">
                <input id="checkbox-option-1d" type="checkbox" value="">
                Checkbox option 1
              </label>
            </div>
            <div class="form-checkbox">
              <label for="checkbox-option-2d">
                <input id="checkbox-option-2d" type="checkbox" value="">
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
