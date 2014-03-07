---
layout: example
document-type: Example
title: Transaction example
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
  <div class="grid grid-2-3">
    <div class="inner-block">

      <h1 class="heading-48">
        <span class="heading-27">Section 1</span> About you
      </h1>

      <p>In this section you'll be asked about:</p>

      <ul class="list-bullet">
        <li>Your personal details</li>
        <li>Your contact details</li>
        <li>Your address</li>
        <li>Your residency</li>
        <li>Your claim</li>
      </ul>
      
      <form action="post" class="form">
        
        <fieldset>
          <legend class="heading-36">Your personal details</legend>

          <div class="form-group">
            <label for="full-name">Full name</label>
            <p class="form-hint">
              As shown on your birth certificate or passport
            </p>
            <input type="text" class="form-control" id="full-name">
          </div>
          
          <div class="form-group">
            <label for="other-names">Any other last names</label>
            <input type="text" class="form-control" id="other-names">
            <p class="form-hint">
              E.g. your maiden name
            </p>
          </div>
          
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
          </fieldset><!-- /.date-of-birth -->
          
          <div class="form-group">
            <label for="ni-number">National Insurance number</label>
            <p class="form-hint">
              As shown on your National Insurance card, benefit letter, payslip or P60
            </p>
            <input type="text" class="form-control" id="ni-number">
            <p class="form-hint">
              Eg. 'VO 12 34 56 D'
            </p>
          </div>

          <div class="form-group">
            <label for="nationality">Nationality</label>
            <p class="form-hint">
              As shown on your current passport
            </p>
            <input type="text" class="form-control" id="nationality">
            <p class="form-hint">
              Eg. 'British'
            </p>
          </div>

        </fieldset> <!-- End: Your personal details -->

        <fieldset>
          <legend class="heading-36">Contact details</legend>
          <div class="form-group form-group-compound">
            <label for="telephone-number">Phone or mobile number (if you have one)</label>
            <input type="text" id="telephone-number">
          </div>

          <div class="form-group form-checkbox">
            <label for="text-phone">
              <input id="text-phone" type="checkbox" value="">
              Please use a textphone when contacting me
            </label>
          </div>
         
        </fieldset><!-- End: Contact details -->

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
            <input type="text" class="form-control form-control-1-4" id="address-town">
          </div>

          <div class="form-group">
            <label class="form-label" for="address-postcode">Postcode</label>
            <input type="text" class="form-control form-control-1-8" id="address-postcode">
          </div>

        </fieldset><!-- End: Your address -->
        
        <fieldset>

          <legend class="heading-36">
            Residency
          </legend>

          <fieldset>
            <legend class="form-label">Where do you live?</legend>
            <div class="form-group form-group-block">

              <div class="form-radio">
                <label for="live-yes" class="block-label">
                  <input id="live-yes" type="radio" name="option-radio-1" value="">
                  Yes
                </label>
              </div>
              <div class="form-radio">
                <label for="live-no" class="block-label">
                  <input id="live-no" type="radio" name="option-radio-1" value="">
                  No
                </label>
              </div>

            </div>
          </fieldset>

          <fieldset>
            <legend class="form-label">Have you been out of England, Scotland or Wales for more than a total of 52 weeks in the last 3 years?</legend>
            <div class="form-group form-group-inline">

              <div class="form-radio">
                <label for="out-yes" class="block-label">
                  <input id="out-yes" type="radio" name="option-radio-2" value="">
                  Yes
                </label>
              </div>
              <div class="form-radio">
                <label for="out-no" class="block-label">
                  <input id="out-no" type="radio" name="option-radio-2" value="">
                  No
                </label>
              </div>

            </div>
          </fieldset>
          
           <div class="form-group">
            <input type="submit" class="button" value="Next">
            <button class="button-link">Back</button>
          </div>

        </fieldset>

        

      </form>

    </div>
  </div>
</div><!-- /.grid-wrapper -->
