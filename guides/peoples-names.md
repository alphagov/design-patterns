---
layout: guide
document-type: Design pattern
title: People's names
discuss-url: https://designpatterns.hackpad.com/Peoples-names-mgFWXkwyPEt
published: 2 January 2014
updated: 12 February 2014
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

Here are two ways to ask users for their name:

1. **[Single name field](#single-name-field)**
2. **[Multiple name fields](#multiple-name-fields)**

<h2 class="heading-36" id="single-name-field">1. Single name field</h2>

A single text field where the user can enter their full name, including title if they wish

<div class="example">
  <div class="ribbon">Recommended</div>
  
  <form class="form">
    <div class="form-group">
      <label for="full-name">Full name</label>
      <input type="text" id="full-name" class="form-control">
    </div>
  </form>
  
</div>

<h3 class="heading-24">Pros</h3>

* Can accomodate any kind of name
* Requires the least effort to use
* Avoids the issue of how to label multiple fields

<h3 class="heading-24">Cons</h3>

* Difficult if you need to parse out things like last name
* Can't use formal contractions in correspondence (like 'Mr. Smith')
* May be difficult to integrate this apporach with legacy back-end systems

<h2 class="heading-36" id="multiple-name-fields">2. Multiple name fields</h2>

Users enter the different parts of their name into different fields.

<div class="example">
  <form class="form">
    <div class="form-group">
      <label for="firstName">First name</label>
      <input type="text" id="firstName" class="form-control">
    </div>
    <div class="form-group">
      <label for="lastName">Last name</label>
      <input type="text" id="lastName" class="form-control">
    </div>
  </form>
</div>

<h3 class="heading-24">Pros</h3>

Depending on your audience you'll be able to extract the parts of the name and do stuff with them.

<h3 class="heading-24">Cons</h3>

As soon as you adopt multiple fields you introduce the possibility that:

* a person's name won't fit the format you've chosen
* they enter their names in the wrong order
* they try to enter their full name in the first field

Remember, users of GOV.UK services come from many different cultural backgrounds, each with their own conventions regarding personal names.

For a more detailed overview of issues relating to personal names, read these articles:

* [http://baymard.com/blog/mobile-form-usability-single-input-fields](http://baymard.com/blog/mobile-form-usability-single-input-fields)
* [http://www.w3.org/International/questions/qa-personal-names](http://www.w3.org/International/questions/qa-personal-names)
* [http://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/](http://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/)

<h3 class="heading-24">Guidance</h3>

#### Labels

If you need to use multiple name fields then the current preferred labelling is 'First name', 'Last name'. Don't include 'Middle names' unless you absolutely have to and make sure it's optional (you don't need to mark it as optional as users will understand this).

#### Titles

Avoid asking for someone's title without good reason. It's extra work for users and you're asking them to potentially reveal their gender and marital status as well, which they may not want to do.

If you do implement a title field make sure users can leave it blank and then deal with that option sensibly in any resulting correspondence.

