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

This is the technique of hiding content on a page until a user interacts with it in some way. It's most commonly used with help text or similar supporting content.

Done well it keeps a page focussed and uncluttered and delivers content only to those people who need it. Done badly it hides important content from people or forces them to interact needlessly with the page.

In HTML5, the 'details' and 'summary' tags can be used for this:

<div class="pattern-example">

    <details>
      <summary>What happens if I click on a summary tag?</summary>
      <p>The remaining contents of the details tag are revealed</p>
    </details>

</div>

Cross browser support for these tags is [still patchy](http://caniuse.com/details), but you can plug the gap with JavaScript. [This jQuery plugin](https://github.com/mathiasbynens/jquery-details) does just that, whilst also adding appropriate ARIA roles to the elements.

### When to use this pattern

Take care using this pattern. The objective is to de-clutter your interface by hiding information that's only relevant to a small proportion of users. If a majority of users need that information, *don't hide it*.

Because you're hiding content, the wording of the summary text is critical. It needs to directly address the audience for whom the content is relevant. If you're writing help text then one approach is to frame the summary as a question, FAQ style.


### Watch out for...

A common issue is people not clicking the summary because they worry they'll be taken away from the current page (which can cause problems in transactions). You can help by being very consistent in the way you present these elements. using words like 'show' in the summary text may also help.


### Progressive disclosure in forms

Used carefully, progressive disclosure can improve the user experience of forms by hiding those parts of the form that the user doesn't need to complete. Remember though:

* try to simplify the form so you don't need to use this technique
* don't hide parts of the form that must be completed
* the service must still work when JavaScript is not available