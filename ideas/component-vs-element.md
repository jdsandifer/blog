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
(By the way, if you've been working with JSX and didn't know about this function call, I highly recommend you check out how Babel compiles JSX to pure JavaScript by playing with their [realtime compiler](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwEwlgbgBA9AfEA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.6.0&externalPlugins=).)

That function call creates a JavaScript object which includes all of the information React needs 
to display that piece of the user interface and control it.

You might recognize this element as the humble `div` tag from HTML. In fact, that is the code to create 
that tag in React. Of course, the fun really starts when we combine multiple elements. Let's look at a larger element:

```
<div>
  <h1>React Stuff You Need to Know</h1>
  <p>Here's some really cool stuff about React you should know...</p>
</div>
```
As you can see, there are 3 elements here: div, h1, and p. However, this code still only returns one element. Why? Looking at the non-JSX version will be helpful here:
```
React.createElement('div', null,
  React.createElement('h1', null, 'React Suff You Need to Know'),
  React.createElement('p', null, 'Here's some really cool stuff about React you should know...')
)
```
As you can see, three elements are created, but the two child elements become a part of the parent element. The parent element function call takes the function calls for the children as two of its parameters, but there's only one return.

So far we've been just talking about standard HTML tags as React elements. Let's switch now to looking at how you can create your own elements:

## Components
In React, a component is a function that returns a React element. Let's take a look at one:
```
const ReallyCoolComponent = () => (<div />)
```

Here are a few other ways of creating the same function with the different syntax options:
```
function ReallyCoolComponent() {
  return <div />
}

const ReallyCoolComponent = () => { return React.createElement('div') }

function ReallyCoolComponent() {
  return React.createElement('div')
}
```

Now this is a pretty basic component - and frankly pretty useless - but it illustrates all of the requirements for a React Component:
1. It's a function
2. It returns a React element

That's it! If it has those two properties, it's a React Component.

If you've used React some, you might have some objections to this simplistic definition:
- What about Class components?

Yes, you can use the class syntax to define a React component and it is different than simply defining it using a function, but ultimately *it is still a function*. Don't believe me? Consult Babel again: [Class Component](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYGwhgzhAEBKCmYQgJ4GED2GSYLYAcMA7eIgF2gG8AoAXyA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.6.0&externalPlugins=)

- Doesn't React accept other things besides React Elements in the return of a Component?

Yep, you've got me there. Strings, numbers, booleans, and null are also allowed. The first two are turned into React Elements automagically and the other two are ignored (but valid). For simplicity, I'm including all of these things under the umbrella of Reac t Elements.

You also might be wondering about props at this point. Although props are almost always used in a Component, they are not required. If they are used, though, they add two additional rules:
3. The only parameter a React Component accepts is an object called 'props'.
4. The Component must act like a pure function with regard to it's props.

Let's look at a component that accepts props:
```
const ApplePicker = (props) => {
  return (
    <div>
      <p>I've picked {props.picked} apples today!</p>
      <p>I should pick {props.totalNeeded - props.picked} more...</p>
    </div>
  )
}
```
You can see that in accepts a single parameter object. In this case, it expects that object to have properties called 'picked' and 'totalNeeded'. It can then use those parameters to display the data and calculate how many more apples should be picked.

Importantly, the Component doesn't changes its props or take in additional parameters. That's what it means to act like a pure function with regard to it's props (our rule number 4).

Now that we have a pretty good handle on Element and Components, let's take a look at the next step up from there:

## What's a Higher-Order Component?
Just like a Component returns Elements, a Higher Order Component return Components. Let's jump straight in with an example:

```
const withData = (data, Component) => {
  return (props) => (<Component data={data} />)
}
```

## Communicate
Now go forth and have productive conversations about React!

## Other Resources
To continue reading about this subject, I recommend checking out these other great articles:
- The React introduction pages for [Elements](https://reactjs.org/docs/rendering-elements.html) and [Components](https://reactjs.org/docs/components-and-props.html) (in that order)
- Dan Abramov's article about [React Components, Elements, and Instances](https://medium.com/@dan_abramov/react-components-elements-and-instances-90800811f8ca)
