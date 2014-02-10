---
layout: template-design-patterns
document-type: Design pattern
title: Buttons
page-class: 'buttons'
discuss-url: https://designpatterns.hackpad.com/Buttons-zoP1sKiW3y4
published: 10 January 2014
updated: 10 January 2014
phases:
  - alpha
---

Buttons should be used to signify actions that the user can perform.

<h2 class="heading-36">Button styles</h2>

Buttons can be made of links, inputs and button tags. CSS should be used to separate the technical implementation of a button from its style so it looks the same whatever tag is used, like this:

<div class="pattern-example">
  <div class="inner-block">
    <button class="button">Button tag</button>
    <a href="#" class="button">Link tag</a>
    <input class="button" type="submit" value="Input tag" />
  </div>
</div>

<h3 class="heading-24">Button colours</h3>

The default button colour is green (Sass variable: `$button-colour` ). Only use other colours if it improves the user experience in some way.

<h3 class="heading-24">Disabling buttons</h3>

As with the default browser style, buttons will need a disabled style to indicate when the `disabled` attribute is set.

<div class="pattern-example">
  <div class="inner-block">
    <button class="button" disabled="disabled">Button tag</button>
    <a class="disabled button">Link tag</a>
    <input class="button" disabled="" type="submit" value="Input tag" />
  </div>
</div>

<h2 class="heading-36">Types of button</h2>

<h3 class="heading-24">Primary actions</h3>

<div class="pattern-example">
  <div class="inner-block">
    <p>
      <a href="#" class="button">Next step</a>
    </p>
  </div>
</div>

* Primary actions move the user on to the next part of the transaction
* Avoid having multiple primary actions on a single page

<h3 class="heading-24">Secondary actions</h3>

<div class="pattern-example">
  <div class="inner-block">
    <a href="#" class="button-secondary">Save</a>
  </div>
</div>

* Secondary actions modify the current view
* They don’t move users to the next step
* There can be multiple secondary actions per page
* They should be less prominent than the primary action

<h3 class="heading-24">Warning actions</h3>

<div class="pattern-example">
  <div class="inner-block">
    <a href="#" class="button-warning">Delete account</a>
  </div>
</div>

* Actions that have irreversable effects should look ‘scary’
* Keep them away from the other actions
* Make the action reversible / ‘undo’-able
* If that isn’t possible to implement, use an alert to check that the user really wants to do this

<h3 class="heading-24">Launch button</h3>

<div class="pattern-example">
  <div class="inner-block">
    <a href="#" class="button" rel="external" title="Get started on the HMRC website">Get started</a> on the HMRC website
  </div>
</div>

* Use to initiate a transaction
* Let users know if they’ll be taken to a different website

<h3 class="heading-24">Writing button text</h3>

Advice on writing button text can be found in the [Service Manual](https://www.gov.uk/service-manual/user-centered-design/resources/buttons.html).