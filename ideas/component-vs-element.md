---
date: "2019-08-19"
title: "React Details: Elements, Components, and Higher-Order Components"
category: "React"
---

This post is about React and some of the common vocabulary developers will want to be clear on
when developing using that library.

## Why Do Words Matter?
You may already be thinking: "Vocabulary? Are we talking about defining words? Why is that important?"
As humans, we're good at adapting to our environments. We make clothes to combat intense weather, 
tools to help us create and fix things that are difficult with just our hands, and we have strategies 
to deal with situations that are linguistically challenging.

We ask questions, we try explaining things in different ways, we guesture or draw diagramns, and the list goes on.
We have lots of options for dealing with gaps in communication, so why spend a lot of time worrying about
defining each and every little thing?

Efficiency.

Efficiency of communication. Which leads to efficiency of production and ultimately customers who get faster results 
and are therefore very happy. And that leads to the magic word for all things business related: profit.

With the case made for good communication with clearly defined words, let's talk about some definitions:

## Elements
React is a library designed to improved the speed and efficiency of displaying the user interface of an application.
It does this by acting as an intermediary between the code and the screen, creating a virtual representation of the screen 
that's manipulated by code and then turned into visuals in an efficent way. That virtual representation is composed of elements.

React elements are the building blocks of react. They are used to describe each part of what is displayed on screen 
- each *element*, you might say.

So what does an element look like in code? It looks like this:
```
<div />
```

Or, if you're working on a project that doesn't use JSX, then it would look like this:
```
React.createElement('div')
```

That function call creates a JavaScript object which includes all of the information React needs 
to display that piece of the user interface and control it.

You might recognize this element as the humble `div` tag from HTML. In fact, that is the code to create 
that tag in React. Of course, the fun really starts when we combine multiple elements and that leads us to...

## Components
In React, a component is a function that returns one or more React elements. Let's take a look at one:
```
const ReallyCoolComponent = () => { return <div /> }
```

Or, again for the non-JSX folks:
```
const ReallyCoolComponent = () => { return React.createElement('div') }
```

Now this is a pretty basic component; the real joy comes from using components to return whole pieces of the UI 
and combining those pieces in a modular way.

## What's a Higher-Order Component?


## Why All The Confusion?

## Other Resources
To continue reading about this subject, I recommend checking out these other great articles:
- The React introduction pages for [Elements](https://reactjs.org/docs/rendering-elements.html) and [Components](https://reactjs.org/docs/components-and-props.html) (in that order)
- Dan Abramov's article about [React Components, Elements, and Instances](https://medium.com/@dan_abramov/react-components-elements-and-instances-90800811f8ca)
