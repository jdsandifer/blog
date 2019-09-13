---
date: "2019-08-19"
title: "React Details: Elements, Components, and Higher-Order Components"
category: "React"
---

## Why Do Words Matter?
As a software engineer, I regularly find myself talking with my coworkers about code. Sometimes we're pairing or mobbing on a piece of code together. Other times I just need to explain what I was doing in one part of the code as part of a code review. Maybe I just had a question about a programming practice or I'm helping someone else think through how to approach a problem. Whatever the reason, talking about code is an integral part of team-based software development.

When we're talking about code, it's helpful if everyone in the conversation is on the same page about what we're talking about. Code can be cryptic enough as it is so having a shared vocabulary is important. It can be the difference between a lot of confused questions and re-explanations, and a lot of head nodding and thoughtful pondering. It can shave minutes off of meetings and discussions and allow for a richer experience for all involved.

That's why words matter: They're the most efficient way we have to quickly communicate an idea.

But they only work if everyone has the same understanding of what the words mean. If I say "blue" and you're thinking about the color of grass, turtles, and jalapeño peppers then something has gone wrong. It might take a while, but (hopefully) we'll realize there's a communication gap and spend the time to identify and correct it. This is great because we'll have an even better understanding of each other and what we mean, but we'll have spent a lot of extra time doing it. I'd rather get through stuff more efficiently so we have time to talk about our awesome weekends - wouldn't you?

## Context
Assuming we've agreed that having a shared vocabularly is important, it's necessary that we also discuss context. Different words have different meanings in different contexts so whenever we define words, we should be careful to think about what contexts where they will apply.

As an engineer focused a lot on React, I'll be sharing about some concepts as they apply to React, but you'll soon see that most of them (if not all of them) can be used in other contexts to mean entirely different things. They can even be used outside of React in a software context so it's important to note that. I've seen many instances where words have gotten confusing simply because it wasn't clear what context they were being used in.

Keep in mind, these concepts are strictly for use in talking about React.

To start with, let's talk about the simplest of things in React:

## Elements
React is a library designed to improved the speed and efficiency of displaying the user interface of an application.
It does this by acting as an intermediary between the code and the screen, creating a virtual representation of the screen 
that's manipulated by code and then turned into visuals in an efficent way. That virtual representation is composed of elements.

React elements are the building blocks of react. They are used to create a representation of each part of what should be displayed on the screen - each *element*, you might say.

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
const ReallyCoolComponent = () => (<div />)
```

Without using the ES6 arrow function syntax that becomes:
```
function ReallyCoolComponent() {
  return <div />
}
```

And again without the JSX:
```
const ReallyCoolComponent = () => { return React.createElement('div') }
```

And without JSX or arrow functions:
```
function ReallyCoolComponent() {
  return React.createElement('div')
}
```


Now this is a pretty basic component; the real joy comes from using components to return whole pieces of the UI 
and combining those pieces in a modular way.

Let's look at a more realistic example:


## What's a Higher-Order Component?


## Why All The Confusion?

## Other Resources
To continue reading about this subject, I recommend checking out these other great articles:
- The React introduction pages for [Elements](https://reactjs.org/docs/rendering-elements.html) and [Components](https://reactjs.org/docs/components-and-props.html) (in that order)
- Dan Abramov's article about [React Components, Elements, and Instances](https://medium.com/@dan_abramov/react-components-elements-and-instances-90800811f8ca)
