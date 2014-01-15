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

Only implement a progress indicator if you've observed the user needs described above. Before you implement one, make sure you've made the transaction as simple and straightforward as you can. If you've done this and users are still struggling, only then consider one of the following approaches.


### Example 1: Step indicator

<div class="pattern-example">
	<div class="ribbon">Recommended</div>
	{% include pattern-examples/_step-indicator.html %}
</div>

This is the preferred approach and should be tried before moving on to any of the others. It's accessible, compact and works well on all devices.


### Example 2: Horizontal progress bar

<div class="pattern-example">
	{% include pattern-examples/_horizontal-progress-bar.html %}
</div>

A horizontal progress bar outlines each of the steps involved in a transaction. This gives you a second chance to explain to users what's involved in each step if they missed this information on the start screen.

Numbering each step helps to reinforce their sequential nature. The link style lets users know that a step has been completed and also that it can be used as navigation.

However, don't rely on people spotting any links in a progress bar - they often won't. Instead, add 'Back' and 'Next' links to the bottom of each screen.


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

By convention we use a vertical progress bar for this. The steps aren't numbered because they can be completed in any order. The vertical alignment allows room for more steps and also space to indicate how complete each step is.

Don't forget you'll need to let people know when they can progress past these steps to the next part of the transaction.

<div class="pattern-example">
	{% include pattern-examples/_vertical-progress-bar-2.html %}
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


