---
layout: pattern
title: Progress indicators
page-class: 'progress-indicator'
phases:
  - alpha
---


### What's the problem?

As people interact with a multi-step transaction they can sometimes become disorientated or think that they've finished when they haven't. This can cause them to drop out of the transaction before they've completed it.

### What can I do about it?

A progress indicator addresses this issue by telling users how many steps they've completed and how many more there are to go. More detailed progress indicators give an overview of each step and may also allow users to navigate between the steps.

### When should I use one?

Only implement a progress indicator if you've observed the user needs described above. Before you implement one, make sure you've made the transaction as simple and straightforward as you can. If you've done this and users are still struggling, only then consider one of the following approaches.


### Example 1: Step indicator

<div class="pattern-example">
	<div class="ribbon">Recommended</div>
	<div class="title">
	  <p>Step 3 of 5</p>
	  <h1>Payment details</h1>
	</div>
</div>

This is the preferred approach and should be tried before moving on to any of the others. It's accessible, compact and works well on all devices.


### Example 2: Horizontal progress bar

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

A horizontal progress bar outlines each of the steps involved in a transaction. This gives you a second chance to explain to users what's involved in each step if they missed this information on the start screen.

Numbering each step helps to reinforce their sequential nature. The link style lets users know that a step has been completed and also that it can be used as navigation.

However, don't rely on people spotting any links in a progress bar - they often won't. Instead, add 'Back' and 'Next' links to the bottom of each screen.


### Example 3: Vertical progress bar

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

For some transactions you'll want to let users complete the steps in any order, or let them partially complete steps. In general this is harder to do in a usable way, so only do it if the benefits to the user outweight the costs.

A vertical progress bar gives you the flexibility you'll need without implying a fixed order of completion. It's visually distinct from a horizontal progress bar, helping users to understand that it behaves slightly differently.

Don't forget you'll need to let people know when they can progress past these steps to the next part of the transaction.

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

You'll probably want to alert users that they can proceed in some other way too (a pop-up?). They're unlikely to notice that you added a button below the steps.


### Example 4: Loading bar (don't do this)

[EXAMPLE HERE]

We're not recommending that you use these. So far we've not seen any examples where a simple step indicator wouldn't work just as well. As that's the simpler solution, that's the one we're recommending.

There's one possible use case, where:

* there are a large number of similarly sized steps
* the total number of steps changes depending on how the user completes them

A survey is one example of the above. If anyone wants to test the two approaches on a survey we'd be very interested in the results.


### Limitations of this pattern

A limitation of all of these approaches occurs if the number of steps in the transaction changes as the user interacts with it. This can often occur with branching transactions.

This results in the total number of steps changing, which users may find confusing and may reduce their confidence in what the system is telling them.

One way around this is not to specify how many steps are left, but this removes one of the key benefits of the pattern.

Another way is to group steps into larger chunks that don't change and represent those instead.

Finally, you could show all the steps but allow users to simply skips over the ones that don't apply.

As always, testing with your users is only way to decide on the best approach.


[Discuss this pattern](https://designpatterns.hackpad.com/Progress-indicators-3AOrLoia9Us)


