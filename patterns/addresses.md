---
layout: template-design-patterns
document-type: Design pattern
title: Addresses
page-class: 'addresses'
discuss-url: https://designpatterns.hackpad.com/Address-CgrMSGRAhRc
published: 2 January 2014
updated: 9 January 2014
phases:
  - alpha
---

There are a couple of ways to capture addresses. Which one you choose will depend on what you want to do with the address and which geographical regions you need to support. We'll discuss three approaches here:

1. [Free text box](#free-text-box)
2. [Multiple fields](#multiple-fields)
3. [Address finder](#address-finder)

<h3 class="heading-24">1. Free text box</h3>

A single, multi-line text box where users write out the address in full.

<div class="example">
  <form class="form">
    <div class="control">
      <label for="address">Full address</label>
      <textarea type="text" id="address" rows="5"></textarea>
    </div>
  </form>
</div>

<h4 class="heading-19"></h4>

* It can handle any possible address format
* People can copy and paste addresses from the clipboard
* People don't have to work out which part of the address goes in which field

<h4 class="heading-19">Cons</h4>

* Parsing addresses for sub-parts (region, street etc.) is hard, and impossible to do with 100% accuracy

<h4 class="heading-19">Use when...</h4>

* you're expecting a very broad range of address formats
* you don't need to use specific sub-parts of the address


<h3 class="heading-24">2. Multiple fields</h3>

The address is broken down into multiple fields. Here's an example that works for simple UK addresses:

<div class="example">
	<form class="form">
		<div class="control">
	  		<label for="ex2-street">Street address</label>
	  		<input type="text" id="ex2-street">
		</div>
		<div class="control">
	  		<label for="ex2-street2" class="visuallyhidden">Street address line 2</label>
	  		<input type="text" id="ex2-street2">
		</div>
		<div class="control">
	  		<label for="ex2-town">Town / City</label>
	  		<input type="text" id="ex2-town">
		</div>
		<div class="control">
	  		<label for="ex2-county">County (optional)</label>
	  		<input type="text" id="ex2-county">
		</div>
		<div class="control">
	  		<label for="ex2-postcode">Postcode</label>
	  		<input type="text" id="ex2-postcode" class="postcode">
		</div>
	</form>
</div>

<h4 class="heading-19">Pros</h4>

* You can easily extract the parts of an address and do things with them
* You can give help for or validate each part of the address separately
* Works well with browsers that have auto-complete enabled

<h4 class="heading-19">Cons</h4>

* Hard to find a single format that works for a broad range of regions
* No guarantee that people will use the fields as you intended
* Can't easily paste addresses from the clipboard

<h4 class="heading-19">Use when...</h4>

* you know which regions the addresses will come from and can find a format that supports them all

<h4 class="heading-19">Guidelines for UK addresses</h4>

* 'postcode' is written all one word
* let people enter postcodes with or without spaces
* avoid making individual fields mandatory (but warn users if they don't fill in any fields)
* Royal Mail do not need a county as long as the town and postcode are included
* include a county field though - it lets people who don't know their postcode give a valid address
* make the field lengths appropriate - it helps people understand the form


<h3 class="heading-24"></h3>

Sometimes referred to as 'postcode lookup'. An address finder lets users specify a UK address by inputing their postcode and selecting the address from a list.

<h4 class="heading-19">Remember...</h4>

* Make it clear that the address finder only works for UK addresses
* Provide a manual option for people with international adresses or addresses that are missing or badly formed in the Royal Mail database

<h4 class="heading-19">Example</h4>

Here's an example that combines an address finder, with a free text box. This approach potentially combines the benefit of structured data for UK addresses, whilst allowing for any format for non-UK addresses.

<div class="pattern-example">
	<form class="form">
		<div class="js-address-finder">
			<div class="control">
		  		<label for="address2">Address</label>
		  		<textarea type="text" id="address2" rows="5"></textarea>
			</div>
		</div>
	</form>
</div>

**Note:** The above example is purely to demonstrate the interaction, it's not production code.
