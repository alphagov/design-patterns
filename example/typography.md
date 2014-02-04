---
layout: template-example
document-type: Guide
title: Typography example
phases:
  - alpha
---

<div id="global-breadcrumb" class="breadcrumb">
  <nav role="navigation">
    <ol class="group">
      <li><a href="https://www.gov.uk">Home</a></li>
      <li><a href="{{ site.baseurl }}/">Guides</a></li>
      <li><a href="{{ site.baseurl }}/example/">Examples</a></li>
    </ol>
  </nav>
</div>

<div class="grid-wrapper">
  <div class="grid">
    <div class="inner-block">
      
      <div class="text">

        <h1>
          <span>{{ page.document-type }}</span>
          {{ page.title }}
        </h1>

        <p>The GOV.UK design is mostly about the typography. Tell people what they need to do, in words that they understand. Make the words big enough so they are comfortable to read.</p>

        <p>GOV.UK uses the typeface New Transport, an update of Transport which was designed in the late fifties/early sixties for for Britain’s national motorway and road sign system. It's designed to be highly legible in all sorts of extreme conditions; in the rain, at night, at speed. Read more about it on <a href="https://gds.blog.gov.uk/2012/07/05/a-few-notes-on-typography/">Ben's blog post</a>.</p>

        <h2>Practical advice</h2>

        <h3>Body copy</h3>

        <p>Body copy is the main content of your web page. In most cases we'd advise:</p>

        <ul>
          <li>the body copy should be the main focus of the page. on desktop computers that means 66.6% page width or wider</li>
          <li>use the 19px font size for paragraph and caption text</li>
          <li>try to keep line lengths beneath about 75 characters</li>
        </ul>

        <h4>Bold and italics</h4>

        <p>We provide two weights of New Transport; regular and bold. The bold weight should only be used for navigation (things like headers) and not for emphasising passages within body text.</p>

        <p>We don't provide an italic version of New Transport, as many users find italic fonts harder to read.</p>

        <h4>Colours</h4>

        <p>Text should only be set in black ($text-colour) with <span class="text-secondary">secondary text in grey</span> ($secondary-text-colour), with the exception of:</p>

        <ul>
          <li><a href="#">links which should be blue</a> ($link-colour)</li>
          <li>buttons or dialogue boxes with dark backgrounds, which should have the text in white ($page-colour)</li>
        </ul>
        
    </div>
    
  </div>
</div>
