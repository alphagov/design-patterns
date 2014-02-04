---
layout: pattern
title: Progressive disclosure
page-class: 'progressive-disclosure'
discuss-url: https://designpatterns.hackpad.com/
published: 2 January 2014
updated: 9 January 2014
phases:
  - alpha
---

This is the technique of hiding content on a page until a user interacts with it in some way.
Examples of progressive diclosure include tooltips, expanding sections in forms and the HTML details tag.

Done well it:

* keeps a page focussed and uncluttered
* delivers targeted content to those people who need it
* reduces the [cognitive load](http://usabilityfriction.com/2010/11/22/cognitive-load/) on your users

Don't over do it and be careful not to hide important content from people or force them to interact needlessly with the page.

If a majority of users need that content, *don't hide it*.



### Details tag

The HTML5 `details` and `summary` tags can be used like this:

<div class="pattern-example">
    <details>
      <summary>What happens if I click on a summary tag?</summary>
      <p>The remaining contents of the details tag are revealed</p>
    </details>
</div>

The Sass code for the above example is [available on GitHub](https://github.com/alphagov/design-patterns/blob/gh-pages/patterns/assets/sass/helpers/_progressive-disclosure.scss). Cross browser support for these tags is [still patchy](http://caniuse.com/details), but you can plug the gap with JavaScript. [This jQuery plugin](https://github.com/mathiasbynens/jquery-details) does just that, whilst also adding appropriate ARIA roles to the elements.

#### Writing good summary text

Good summary text is critical because you're hiding content from users. The target audience need to be compelled to click on the summary - everyone else needs to know that they can safely ignore it. Verbs are powerful, as is writing in the first person.

Some examples: 

* 'What if I don't have a passport?'
* 'Add another address'
* 'Show details'

Some users are reluctant to click on summary text for fear that they will be taken to another screen and lose whatever information they've already provided. A consistent visual treatment (like the '►' bullet above) can help, as can using strong action words like 'add' or 'show'.


### Progressive disclosure in forms

Used carefully, progressive disclosure can improve the user experience of forms by hiding those parts of the form that the user doesn't need to complete.

Remember though:

* the service must still work and make sense when JavaScript is not available
* try to simplify the form so you don't need to use this technique
* don't hide parts of the form that must be completed