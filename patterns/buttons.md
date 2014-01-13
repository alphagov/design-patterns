---
layout: pattern
title: Buttons
page-class: 'buttons'
discuss-url: https://designpatterns.hackpad.com/Buttons-zoP1sKiW3y4
published: 10 January 2014
updated: 10 January 2014
phases:
  - alpha
---

Buttons should be used to signify actions that the user can perform.

### Button styles

Buttons can be made of links, inputs and button tags. CSS should be used to separate the technical implementation of a button from its style so it looks the same whatever tag is used, like this:

<div class="pattern-example">
  <p>
    <button class="button">Button tag</button>
    <a href="#" class="button">Link tag</a>
    <input class="button" type="submit" value="Input tag" />
  </p>
</div>

### Button colours

The default button colour is green (Sass variable: `$button-colour` ). Only use other colours if it improves the user experience in some way.

### Disabling buttons

As with the default browser style, buttons will need a disabled style to indicate when the `disabled` attribute is set.

<div class="pattern-example">
<p>
  <button class="button" disabled="disabled">Button tag</button>
  <a class="disabled button">Link tag</a>
  <input class="button" disabled="" type="submit" value="Input tag" />
</p>
</div>

### Types of button

#### Primary actions

<div class="pattern-example">
  <p>
    <a href="#" class="button">Next step</a>
  </p>
</div>

* Primary actions move the user on to the next part of the transaction
* Avoid having multiple primary actions on a single page

#### Secondary actions

<div class="pattern-example">
  <p>
    <a href="#" class="button-secondary">Save</a>
  </p>
</div>

* Secondary actions modify the current view
* They don’t move users to the next step
* There can be multiple secondary actions per page
* They should be less prominent than the primary action

#### Warning actions

<div class="pattern-example">
  <p>
    <a href="#" class="button-warning">Delete account</a>
  </p>
</div>

* Actions that have irreversable effects should look ‘scary’
* Keep them away from the other actions
* Make the action reversible / ‘undo’-able
* If that isn’t possible to implement, use an alert to check that the user really wants to do this

### Launch button

<div class="pattern-example">
  <p>
    <a href="#" class="button" rel="external" title="Get started on the HMRC website">Get started</a>
     on the HMRC website
  </p>
</div>

* Use to initiate a transaction
* Let users know if they’ll be taken to a different website

### Writing button text

Do use:

* verbs and an active voice
* clear, informative and succinct language
* sentence case

Don’t use:

* technical terms - eg use ‘delete’, not ‘form reset’, use one of the common actions below instead of ‘submit’
* lots of words - eye tracking shows users are less likely to read long labels

### Common actions

Many of these can be used in place of ‘Submit’, which is a technical term to be avoided.

#### 'Start now’
Use at the beginning of the service

#### ‘Next’
Not ‘forward’, ‘go’ etc.

#### ‘Finish’
Use at the end of a service before the final confirmation screen

#### ‘Back’
Not ‘previous’

#### ‘Sign in’ and ‘Sign out’
Not ‘log-in’ or ‘log-out’

#### ‘Sign up’
Only use this for mailing lists

#### ‘Create an account’
Not ‘register’

### Compound actions

Sometimes you want a single button to perform more than one action. For example, ‘Save and quit’.

It’s worth trying to avoid this situation but if you can’t, use common sense. If one of the actions is obvious or not important to know, don’t mention it.

For example, if a button saves the current state and moves the user to the next screen, don’t use ‘Save and next’, just use ‘Next’, because users will assume the former. When in doubt, test with real users.

