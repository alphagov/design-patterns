---
layout: guide
document-type: Design pattern
title: Progress indicators
discuss-url: https://designpatterns.hackpad.com/Progress-indicators-3AOrLoia9Us
sass-url: https://github.com/alphagov/design-patterns/blob/gh-pages/assets/sass/design-patterns/_progress-indicator.scss
published: 2 January 2014
updated: 9 January 2014
phases:
  - alpha
breadcrumb:
  -
    title: Home
    url: https://www.gov.uk/service-manual
  -
    title: New design guides
    url:
---

When people interact with multi-page transactions they can become disorientated or think that they've finished when they haven't. This can cause them to drop out of the transaction before they've completed it.

Progress indicators address this issue by telling users how many steps they've completed and how many more there are to go.

1. **[Step indicator](#step-indicator)**
2. **[Progress bar](#progress-bar)**
3. **[Summary menu](#summary-menu)**

<h2 class="heading-36" id="step-indicator">1. Step indicator</h2>

Tell the user what step they're on.

<div class="example">
  <div class="ribbon">Recommended</div>
  <div class="inner-block">
    
    <h1 class="heading-48">
      <span class="heading-27">Step 3 of 5</span>
      Payment details
    </h1>
    
  </div>
</div>

This approach should be tried before moving on to any of the others. It's accessible, compact and works well on all devices.

<h2 class="heading-36" id="progress-bar">2. Progress bar</h2>

Show the steps horizontally across the top of the page, with the current step highlighted.

<div class="example example-wide">
  <div class="inner-block">
    
    <nav class="progress-indicator progress-indicator-horizontal">
      <ol>
        <li class="done"><a href="">1. About you <span>done</span></a></li>
        <li class="done"><a href="">2. Your company <span>done</span></a></li>
        <li class="active">3. Payment details</li>
        <li>4. Delivery</li>
        <li>5. Done</li>
      </ol>
    </nav>
    
  </div>
</div>

<h3 class="heading-24">Pros</h3>

* Provides an overiew of the entire process
* Steps can be used as navigation

<h3 class="heading-24">Cons</h3>

* Can be hard to fit into the available space, especially on small screens

<h3 class="heading-24">Guidance</h3>

* Works best when the sequence of steps is fixed
* Number the steps to reinforce their sequential nature
* Don't rely on progress bars for navigation - you'll still need to provide 'Back' and 'Next' links on each screen


<h2 class="heading-36" id="summary-menu">3. Summary menu</h2>

Provide a vertical list of links to each section, which can be completed in any order.

<div class="example">
  <div class="inner-block">
    
    <nav class="progress-indicator progress-indicator-vertical">
      <ul>
        <li><a href="">About you <span>(3/10)</span></a></li>
        <li class="done"><a href="">Your company <span>(10/10)</span></a></li>
        <li class="active"><a href="">Payment details <span>(1/6)</span></a></li>
        <li><a href="">Delivery <span>(0/3)</span></a></li>
      </ul>
    </nav>
    
  </div>
</div>

<h3 class="heading-24">Pros</h3>

* Section titles can be longer
* More room for more sections
* Users can complete sections in an order that suits them
* Steps can be partially completed

<h3 class="heading-24">Cons</h3>

* Not always clear when the user has completed all the steps

<h3 class="heading-24">Guidance</h3>

A summary menu can work well for lengthy applications where the user might not have all the information to hand.
They can complete the sections in the order they choose, then go back and finish the rest when they're able to.
To fully take advantage of this though you'll need to provide a way for users to save and return to their work.



