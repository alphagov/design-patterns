---
layout: pattern
title: Progress indicators
page-class: 'progress-indicator'
phases:
  - alpha
---


Use a progress indicator to help people work through transactions that are spread over multiple screens.


**Signs that you might need a progress indicator:**

1. People think that they've finished the transaction when they haven't
2. People become irritated because they don't know how much further they have to go
3. People lose track of what to do because they have no overall picture of the steps

If your users aren't having any of the above problems then you probably don't need to use a progress indicator.

If they're only experiencing the first two problems then a simple step indicator above the page title should be enough.

#### Example

<div class="pattern-example">
	<div class="title">
	  <p>Step 3 of 5</p>
	  <h1>Payment details</h1>
	</div>
</div>

If they are also experiencing the third problem then you should consider a horizontal progress bar instead. 

#### Example

<div class="pattern-example">
	<nav role="navigation" class="horizontal progress-indicator">
		<ul>
		  <li class="done">1. About you <span>done</span></li>
		  <li class="done">2. Your company <span>done</span></li>
		  <li class="active">3. Payment details</li>
		  <li>4. Delivery</li>
		  <li>5. Done</li>
		</ul>
	</nav>
</div>

Remember:

1. number the steps
2. align them horizontally across the top of the screen
3. add 'Back' and 'Next' links at the bottom of each screen
4. make it clear which step they're on
5. always show the final 'Done' step (NEEDS TESTING)


### Variable order steps

If people can complete the steps in any order, or if you can partially complete steps then use this layout in a left column instead.

#### Example

<div class="pattern-example">
	<nav role="navigation" class="vertical progress-indicator">
		<ul>
		  <li><a href="">About you <span>(3/10)</span></a></li>
		  <li class="done"><a href="">Your company <span>(10/10)</span></a></li>
		  <li class="active"><a href="">Payment details <span>(1/6)</span></a></li>
		  <li><a href="">Delivery <span>(0/3)</span></a></li>
		</ul>
	</nav>
</div>

Don't forget you'll need to let them know when they can progress past these step to the next part of the transaction.

#### Example

<div class="pattern-example">
	<nav role="navigation" class="vertical progress-indicator">
		<ul>
		  <li class="done"><a href="">About you <span>(10/10)</span></a></li>
		  <li class="done"><a href="">Your company <span>(10/10)</span></a></li>
		  <li class="active done"><a href="">Payment details <span>(6/6)</span></a></li>
		  <li class="done"><a href="">Delivery <span>(3/3)</span></a></li>
		</ul>
	</nav>
	<p><a href="" class="button">Submit order</a></p>
</div>

You'll probably want to alert users that they can proceed in some other way too (pop-up?). They're unlikely to notice that you added a below the steps.

In general, allowing users to complete steps in any order is harder to do in a usable way. Only do this if the user benefits outweight the costs.

Remember:

1. Don't number the steps
2. Align them down the left of the screen *
3. Make each step a link to it's screen
4. Add 'Back' and 'Next' links at the bottom of each screen (to help people who want to go through in a fixed order)
5. Make it clear how much of each step has been completed
6. Make it clear which step they're on
6. Make it VERY clear when they can proceed to the next part of the transaction

*The recommendation to left align is based on the notion that horizontal alignment more strongly implies a fixed order of completion than vertical alignment. It might be incorrect. If anyone has evidence either way we'd be interested to hear it. 


### 'Loading bar' style (Don't do this)

[EXAMPLE HERE]

We're not currently recommending that you use these. So far, we've not seen any examples where a simple step indicator wouldn't work just as well. As that's the simpler solution, that's the one we're recommending.

There's one possible use case, where:

* there are a large number of similarly sized steps
* the total number of steps changes depending on how the user completes them

A survey is one example of the above. If anyone wants to test the two approaches on a survey we'd be very interested in the results.

[Discuss this pattern](https://designpatterns.hackpad.com/Progress-indicators-3AOrLoia9Us)


