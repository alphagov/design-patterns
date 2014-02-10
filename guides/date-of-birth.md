---
layout: template-design-patterns
document-type: Design pattern
title: Date of birth
page-class: 'date-of-birth'
discuss-url: https://designpatterns.hackpad.com/Date-of-birth-648NbMKNYTr
sass-url: https://github.com/alphagov/design-patterns/blob/gh-pages/assets/sass/design-patterns/_date-of-birth.scss
published: 10 January 2014
updated: 10 January 2014
phases:
  - alpha
---

Our current recommendation for capturing date of birth is to use three clearly labelled text boxes.

<div class="pattern-example">
	<div class="ribbon">Recommended</div>
	<form class="form">
		<fieldset class="date-of-birth">
			<legend>Date of birth <p class="hint">Example: 21 03 1976</p></legend>

			<div class="control day">
		  		<label for="day">Day</label>
		  		<input type="text" pattern="[0-9]*" id="day">
			</div>
			<div class="control month">
		  		<label for="month">Month</label>
		  		<input type="text" id="month">
			</div>
			<div class="control year">
		  		<label for="year">Year</label>
		  		<input type="text" pattern="[0-9]*" id="year">
			</div>
		</fieldset>
	</form>
</div>

### Guidance

A date of birth is personal information, so don't ask for it unless you absolutely have to. For example, you don't need to ask for full date of birth if you only need to know:

* a person's current age
* a persons year of birth
* whether a person falls within a particular age range

Avoid using calendar controls for dates of birth. They're more appropriate for recent past or future dates, or where the day of the week is relevant.

We've found that some users struggle with long select boxes, which is why we're not recommending you use them.
See [this blog post](https://designnotes.blog.gov.uk/2013/12/05/asking-for-a-date-of-birth/) for a more detailed account of our findings.

**Tip:** If you want to trigger the num-pad on iPhones, add a pattern attribute to the input element like this: `pattern="[0-9]*"`