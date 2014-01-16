---
layout: pattern
title: Progress indicators
page-class: 'progress-indicator'
discuss-url: https://designpatterns.hackpad.com/Progress-indicators-3AOrLoia9Us
published: 2 January 2014
updated: 9 January 2014
phases:
  - alpha
---


### What's the problem?

As people interact with a multi-step transaction they can sometimes become disorientated or think that they've finished when they haven't. This can cause them to drop out of the transaction before they've completed it.

### What can I do about it?

A progress indicator addresses this issue by telling users how many steps they've completed and how many more there are to go. More detailed progress indicators give an overview of each step and may also allow users to navigate between the steps.

### When should I use one?

Only implement a progress indicator if you've observed the user needs described above. Before you implement one, make sure you've made the transaction as simple and straightforward as you can. If you've done this and users are still struggling, then consider one of the following approaches.


### Example 1: Step indicator

<div class="pattern-example">
	<div class="ribbon">Recommended</div>
	{% include pattern-examples/_step-indicator.html %}
</div>

This is the preferred approach and should be tried before moving on to any of the others. It's accessible, compact and works well on all devices.


### Example 2: Horizontal progress bar

<div class="pattern-example wide">
	{% include pattern-examples/_horizontal-progress-bar.html %}
</div>

A horizontal progress bar labels each of the steps involved in a transaction. This can help if your users need reminding of what each step involves or of how long each step might take. 

You can also use the progress bar as an additional form of navigation. Don't rely on people using it like this though - you'll still need to provide 'Back' and 'Next' links at the bottom of each screen.

Remember to number each step - it helps to reinforce their sequential nature.

You'll need to keep the number of steps and their names short in order to fit them all on one line.


### Example 3: Vertical progress bar

<figure class="pattern-example">
	{% include pattern-examples/_vertical-progress-bar.html %}
	<figcaption>
		<dl class="code-links">
			<dt>View:</dt>
			<dd><a href="https://github.com/alphagov/design-patterns/blob/gh-pages/_includes/pattern-examples/_vertical-progress-bar.html">HTML</a></dd>
			<dd><a href="https://github.com/alphagov/design-patterns/blob/gh-pages/patterns/assets/sass/helpers/_progress-indicator.scss">Sass</a></dd>
		</dl>
		Example 3: Vertical progress bar
	</figcaption>
</figure>

For some transactions you'll want to let users complete the steps in any order, or let them partially complete steps. In general this is harder to do in a usable way, so only do it if the benefits to the user outweight the costs.

We recommend using a vertical progress bar for this. The steps aren't numbered because they can be completed in any order. The vertical alignment allows room for more steps and also to indicate how complete each step is.

Don't forget you'll need to let people know when they can progress past these steps to the next part of the transaction.

<div class="pattern-example">
	{% include pattern-examples/_vertical-progress-bar-2.html %}
</div>

You'll should also consider alerting users that they can proceed in some other way too (a pop-up for example). Not everyone will notice the appearance of a button.


### Example 4: Loading bar

We're not recommending that you use these. So far we've not seen any examples where a simple step indicator wouldn't work just as well. As that's the simpler solution, that's the one we're recommending.

There's one possible use case, where:

* there are a large number of small, similarly sized steps
* the total number of steps changes depending on how the user completes them

A survey is one example of the above. If anyone wants to test the two approaches on a survey we'd be very interested in the results.


### Dealing with branching transaction flows

If the total number of steps changes as the user moves through the transaction then this may confuse your users. One way to avoid the issue is not to specify how many steps are left, but this does remove one of the key benefits of the pattern. Another approach is to combine steps into larger chunks that don't change and then represent those instead.

As always, testing with your users is only way to decide on the best approach.


