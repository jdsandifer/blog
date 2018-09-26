---
date: "2018-09-26"
title: "The Weird Reason My React App Wasn't Working on Chrome for iOS"
category: "Bugs"
---

If you haven't checked out my portfolio, you may not know that I pioneered a move to React for a web app I support at work. This app displays event orders so technicians can't deliver the correct gear for events in the building.

## The App's Not Working - Like, At All!
It's never fun to find out that the app you've been slaving away at for days and you thought had just been successfully released doesn't work on a user's device. It's hard to test every single device so this is common, but at work we have a direct connection to our users and can specify how they access our app so it was surprising to have this happen.

The main page that displays various event wasn't displaying anything at all. It seemed to only be affecting users connecting on iOS devices so that's what we had to go on.

## Troubleshooting Begins
One of my strengths in software development is isolating a problem to help solve it quickly. My process involved some straightforward questions and digging to verify the answers:
1. Is the HTML page loading ok? Looks like it.
1. Is the React container showing up? Yep.
1. Is the React app rendering? No...
    1. Because of React itself?
    1. Or React-DOM? No, both are working. (Simple substitution testing shows that React renders a simple element fine.)
1. So everything's working, but the elements aren't showing up? Yep...

From there, I dove into the code that controls which elements show up and where. The primary issue became apparent - events weren't showing up because their dates weren't getting figured out correctly. Correct filtering, but bad dates somehow.

## Documentation
As I've grown as a devloper, I've come to love good documentation. MDN is an awesome reference for all things JavaScript, HTML, and CSS. So, of course, that's where I turn for help (after a quick Google search to scan Stack Overflow for solutions - no need to solve a problem someone else has already solved).

Here's a sample of the type of code I'm trying to verify: `const eventDate = new Date("2018-09-26")`.

Sure enough, the docs confirm that the ISO 8601 date format is an accepted parameter for creating a new date.

Just for kicks, I try `const eventDate = new Date(2018, 8, 26)`, using an older style initialization.

## Voila! It Works! But Why?
Changing the date initialization format caused everything to work correctly again. That was great, but I wasn't satisfied.

I love it when things work, but I also hate not knowing why they worked. What if something changes and the "same" solution fails next time because I didn't truly understand the underlying mechanism?
