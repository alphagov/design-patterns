---
layout: pattern
title: Progress indicators
page-class: 'progress-indicator'
phases:
  - alpha
---

## Introduction

### The user need

As people interact with a multi-step transaction they can sometimes become disorientated or think that they've finished when they haven't. This can cause them to drop out of the transaction before they've completed it.

### The pattern

A progress indicator addresses this issue by telling users how many steps they've completed and how many more there are to go.

More detailed progress indicators give an overview of each step and may allow users to navigate between the steps as well.

### When to use

Only implement a progress indicator if you've observed the user needs described above. Before you implement one, make sure you've made the transaction as simple and straightforward as you can. If you've done this and users are still struggling, only then consider one of the following approaches.

## Examples

### 1. Step indicator

Add some text above the page title that explains which step a user is on and how many steps there are in total.

<div class="pattern-example">
	<div class="title">
	  <p>Step 3 of 5</p>
	  <h1>Payment details</h1>
	</div>
</div>

A step indicator is the preferred approach because it's accessible and works well on all devices. However, if your users also need to see an overview of each step then consider a horizontal progress bar.

### 2. Horizontal progress bar

Run a bar across the top of the page, like this:

<div class="pattern-example">
	<nav role="navigation" class="horizontal progress-indicator">
		<ul>
		  <li class="done"><a href="">1. About you <span>done</span></a></li>
		  <li class="done"><a href="">2. Your company <span>done</span></a></li>
		  <li class="active">3. Payment details</li>
		  <li>4. Delivery</li>
		  <li>5. Done</li>
		</ul>
	</nav>
</div>

You can add links to progress bars, but don't rely on this as users often don't recognise progress bars as a form of navigation. Instead, add 'Back' and 'Next' links at the bottom of each screen.

Remember to number the steps as this helps to emphasise the fact that there's a fixed order of completion.


### 3. Vertical progress bar

If you decide to let users complete the steps in any order, or if they can partially complete steps then use a vertical progress bar instead.

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


