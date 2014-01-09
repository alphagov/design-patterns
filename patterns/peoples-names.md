---
layout: pattern
title: People's names
page-class: 'peoples-names'
discuss-url: https://designpatterns.hackpad.com/Peoples-names-mgFWXkwyPEt
published: 2 January 2014
updated: 9 January 2014
phases:
  - alpha
---


The best way of capturing someone's name is to use a single field marked 'Full name'. This can accomodate any kind of name and requires the least effort to use.

<div class="pattern-example">
	<div class="ribbon">Recommended</div>
	<form class="form">
		<div class="control">
	  		<label for="fullName">Full name</label>
	  		<input type="text" id="fullName">
		</div>
	</form>
</div>


#### Why don't you recommend multiple name fields?


Users of GOV.UK services come from many different cultural backgrounds, each with their own conventions around names.

As soon as you adopt multiple fields you introduce the possibility that a person's name won't fit the format you've chosen, or that they'll enter their names in the wrong order.

For a more detailed overview of these and related issues, read these two articles:

* [http://www.w3.org/International/questions/qa-personal-names](http://www.w3.org/International/questions/qa-personal-names)
* [http://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/](http://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/)

#### What if I still need to use multiple name fields?

If you need to use multiple name fields then the preferred labelling is 'First name', 'Middle names', 'Last name'. Don't include 'Middle names' unless you absolutely have to, and make sure it's optional (you don't need to mark it as optional as users will understand this).

<div class="pattern-example">
	<form class="form">
		<div class="control">
	  		<label for="firstName">First name</label>
	  		<input type="text" id="firstName">
		</div>
		<div class="control">
	  		<label for="middleNames">Middle names</label>
	  		<input type="text" id="middleNames">
		</div>
		<div class="control">
	  		<label for="lastName">Last name</label>
	  		<input type="text" id="lastName">
		</div>
	</form>
</div>

### Title (eg. 'Mr', 'Dr' etc.)

Avoid asking for someone's title without good reason. It's extra work for users and you're asking them to potentially reveal their gender and marital status as well, which they may not want to do.

If you do implement a title field make sure users can leave it blank and deal with that sensibly in any resulting correspondence.

<div class="pattern-example">
	<form class="form">
		<div class="control">
	  		<label for="title">Title</label>
	  		<input type="text" id="name-title">
		</div>
	</form>
</div>


