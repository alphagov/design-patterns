---
layout: pattern
title: Progress indicators
page-class: 'progress-indicator'
phases:
  - alpha
---

## The problem

When transactions are spread over multiple pages this can sometimes cause people to:

1. believe wrongly that they have finished when they haven't
2. become irritated because they don't know how much further they have to go
3. not fully understand the proposition because they can't see what's coming up in future screens
4. forget what it is they're doing because there's no high-level reminder

## Some solutions

Firstly, don't implement any of these unless you know for certain that there's a problem that needs solving. Transactions that are spread over two or three screens or which only take a minute or two to complete probably don't need any of these.

Which solution you choose depends primarily on two things:

* whether people have to complete the steps in a fixed order or not
* how many of the problems described above you've observed

### Fixed order steps

If people are experiencing just the first two problems then a simple step indicator above the page title is enough:

[EXAMPLE HERE]

If people are also experiencing the second two problems then you should consider a horizontal progress bar instead. 

[EXAMPLE HERE]

Remember to:

1. Number the steps
2. Align them horizontally across the top of the screen
3. Add 'Back' and 'Next' links at the bottom of each screen
4. Make it clear which step they're on


### Variable order steps

If people can complete the steps in any order then:

1. Don't number the steps
2. Align them down the left of the screen *
3. Make each step a link to it's screen
4. Add 'Back' and 'Next' links at the bottom of each screen (to help people who want to go through in a fixed order)
5. Make it clear which steps have been completed
6. Make it clear which step they're on

[EXAMPLE HERE]

*This is based on the notion that horizontal alignment more strongly implies a fixed order of completion than vertical alignment. It might be incorrect. If anyone has evidence either way we'd be interested to hear it. 


### 'Loading bar' style (Don't do this)

[EXAMPLE HERE]

We're not currently recommending that you use these. So far, we've not seen any examples where a simple step indicator wouldn't work just as well. As that's the simpler solution, that's the one we're recommending.

There's one possible use case, where:

* There are a large number of similarly sized steps
* The total number of steps changes depending on how the user comppletes them

A survey is one example of the above. If anyone wants to test the two approaches on a survey we'd be very interested in the results.


