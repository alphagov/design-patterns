---
layout: template-design-patterns
document-type: Design pattern
title: User registration
page-class: 'user-registration'
discuss-url: https://designpatterns.hackpad.com/Passwords-email-addresses-and-logins-4dSSBUhCYjj
published: 16 January 2014
updated: 16 January 2014
phases:
  - alpha
---

We recommend you [avoid creating user accounts and login systems](https://www.gov.uk/service-manual/making-software/logins.html) where possible. However if you do need to, follow the guidance here.

<h2 class="heading-36">Usernames</h2>

Avoid creating usernames unless your service has some kind of social element. Instead, use an email address or phone number. You'll need to capture one of these anyway to help users retreive or reset their password.

<h2 class="heading-36">Email addresses</h2>

Depending on the nature of the information your service deals with you might want to verify that an email address has been entered correctly, or that it genuinely belongs to the user.

<h3 class="heading-24">Checking for errors</h3>

To check that an email has been correctly entered you can:

* ask the user to enter it again (kind of annoying)
* check it for common mistakes ('homtail' instead of 'hotmail')

For an example of how this second approach can help, [read this article](http://blog.kicksend.com/how-we-decreased-sign-up-confirmation-email-bounces-by-50/).

<h3 class="heading-24">Verifying the owner</h3>

If you want to verify that an email address belongs to the user you can:

* email them a code and ask them to tell you what it was
* email them a link which they click on

Which approach you use will depend on whether you allow links in your outgoing emails. You'll also need to decide:

* how long you'll wait for an email to be verified
* what you'll allow the user access to in the meantime
* what you'll do if an email isn't verified


[More on how to handle emails](https://www.gov.uk/service-manual/domain-names/email.html)

<h2 class="heading-36">Passwords</h2>

It's good practice to ask users to re-enter their password when they're registering for a service, to check they haven't mis-typed it.


<h3 class="heading-24">Password strength indicators</h3>

Use a password strength indicator to encourage better password practice without forcing users to conform to a specific set of constraints.

Make sure that it uses a good algorithm to determine password strength. Many simply count the number of characters or measure complexity in some way. A good password strength indicator will also check against common passwords and bad practice. The open source [zxcvbn](https://github.com/lowe/zxcvbn) library from Dropbox is an example of one of these.

**TEST THIS:** Password strength indicators are a form of client-side validation. Client side validation can sometimes be distracting to users, so test it thoroughly.


<h3 class="heading-24">Disabling copy / paste on passwords</h3>

Some services disable copy and paste on the password fields. The rationale is that it stops people mis-typing their password and then copying it into the second field. However it also stops people copying their (correct) password from their clipboard or from a password manager they may be using.

By all means, disable copy on the first password field, but do not disable paste on either.

[More on user accounts and logins](https://www.gov.uk/service-manual/making-software/logins.html)