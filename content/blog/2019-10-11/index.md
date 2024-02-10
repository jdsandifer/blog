---
date: "2019-10-11"
title: "React in Detail: Elements, Components, and HOCs"
category: "React"
---

At Metal Toad, I’m part of a team of developers who often work on code together. Whether it’s pairing with one other person or mobbing as a larger group, teamwork is an important way we help each other and provide the best value to our customers.

And teamwork requires communication. The better the communication, the more effectively ideas can be shared and topics discussed. And while there are lots of resources out there for general advice about how to communicate well, and we have dictionaries and thesauruses when we need to figure out what words mean, industry-specific language can be more challenging.

Whether you call it jargon, lingo, or something else, some words only make sense in the context of a specific industry. In the case of software development, sometimes a specific programming language, library, or tool even has its own terms. And you won’t find them in most dictionaries.

Because they’re so specific to particular fields and are often taught verbally to new people as they’re learning the ropes, it’s much easier for there to be misunderstandings around some of these words. Today, I’d like to talk about a few of those words in the context of React.

## What is React?
If you aren’t already familiar with it, React’s purpose is to speed up the display of the user interface for web apps. It’s a JavaScript library that acts as an intermediary between business logic and the browser. As a developer, I tell React what I want to appear on the screen and it works its magic to make sure those things appear quickly and update efficiently as the user interacts with them.

A responsive and snappy user interface is an important part of any application so it’s easy to see why we use React at Metal Toad - because we care about the experience of our users and are dedicated to using the latest tools to give them the best experience possible.

Now that you have some context for why we use React, let's look at the smallest parts of a React app:

## Elements
React elements are the building blocks of React. They are objects used to create a representation of each part of what should be displayed on the screen - each *element*, you might say.

So what does an element look like in code? It looks like this:
```
<div />
```
Or, if you're working on a project that doesn't use JSX, then it would look like this:
```
React.createElement('div')
```
(JSX compiles to regular JavaScript functions - see how it works with [Babel’s interactive compiler](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwEwlgbgBA9AfEA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.6.0&externalPlugins=).)

That function call creates a JavaScript object which includes all of the information React needs 
to display that piece of the user interface and control it. You might recognize this element as the humble `<div>` tag from HTML. In fact, that is the code to create that tag in React. Of course, the fun really starts when we combine multiple elements. Let's look at a larger element:
```
<div>
  <h1>React Stuff You Need to Know</h1>
  <p>Here is some stuff about React…</p>
</div>
```
As you can see, there are 3 elements here: `<div>`, `<h1>`, and `<p>`. However, this code still only returns one element. Why? Looking at the non-JSX version will be helpful here:
```
React.createElement('div', null,
  React.createElement('h1', null, 'React Stuff You Need to Know'),
  React.createElement('p', null, 'Here is some stuff about React…')
)
```
The three elements are definitely created, but the two child elements become a part of the parent element. The parent element function call takes the function calls for the children as two of its parameters so the end result is one return from the parent function call.

So far we've been just using standard HTML tags as React elements. Let's switch now and look at how you can create your own elements:

## Components
In React, a component is a function that returns a React element. Let's take a look at one:
```
const ReallyCoolComponent = () => (<div />)
```
Here are a few other ways of creating the same function using different JavaScript syntax:
```
function ReallyCoolComponent() {
  return <div />
}

const ReallyCoolComponent = () => React.createElement('div')

function ReallyCoolComponent() {
  return React.createElement('div')
}
```
Now this is a pretty basic component - and frankly, not super useful - but it illustrates all of the requirements for a React component:
It's a function
It returns a React element

That's it! If it has those two properties, it's a React component.

If you've used React some, you might have some objections to this simplistic definition:

**Q: What about Class components?**

A: Yes, you can use the class syntax to define a React component and it is different than simply defining it using a function, but ultimately *it is still a function*. Don't believe me? Try it yourself in [a Repl](https://repl.it/repls/AlertExternalContent).

Of course, this doesn’t mean that a functional component and a class component are the same. It just means they both fit the description of being a function.

**Q: Doesn't React accept other things besides React elements in the return of a component?**

A: Yep, you've got me there. Strings, numbers, booleans, and null are also allowed. The first two are turned into React elements automagically and the other two are ignored (but valid). For simplicity, I'm including all of these things under the umbrella of React elements because React treats them all like elements (or the lack thereof).

**Q: What about props?**

A: Good question! Although props are almost always used in a component, they're not actually required. If they are used, though, they add two additional rules:
1. The only parameter a React Component accepts is one object called 'props'.
1. The component must act like a pure function with regard to it's props.

Let's look at a component that accepts props:
```
const ApplePicker = (props) => {
  return (
    <div>
      <p>{`I picked ${props.picked} apples today!`}</p>
      <p>{`I should pick ${props.totalNeeded - props.picked} more…`}</p>
    </div>
  )
}
```
You can see that it accepts a single parameter object. In this case, it expects that object to have two properties called `picked` and `totalNeeded`. It can then use those properties to display data and, in this case, calculate how many more apples should be picked.

Importantly, the component doesn't change its props or take in additional parameters. That's what it means to act like a pure function with regard to it's props (our last rule).

Here’s the complete list of rules for a React component:
1. It must be a function. (Classes are functions.)
1. It must return a valid React element (including string, number, boolean, or null).
1. If it accepts parameters, it should accept one parameter object called `props`.
1. It must act like a pure function with regard to its props.

Now that we have a pretty good handle on elements and components, let's take a look at the next step up from there:

## Higher-Order Components
What’s a higher-order component? Just like a component is a function that returns a React element, a higher-order component (HOC) is a function that returns a React component. Let's jump straight in with an example:
```
const withData = (data, AComponent) => {
  return (props) => (<AComponent {...props} data={data} />)
}
```
And for clarity, here it is without the JSX:
```
function withData(data, AComponent) {
  return function(props) {
    return React.createElement(AComponent, {...props, data})
  }
}
```
This is definitely a function, but is it an HOC? Let's do a quick check to see if what it returns is a React component using our four rules for React components:
Is it a function? Yep!
Does it return a React element? Yep. (Note: `AComponent` is a React component, but `<AComponent … />` is a React element.)
If it accepts parameters, is it one parameter called `props`? Yep.
Does it act like a pure function with regard to its props? It does indeed.

Success! Since this function returns a component, it’s a higher order component. As you can see, it appears to be adding data to the props of `AComponent`. This is one of the common ways HOC’s are used.

## Don’t Forget Context
If you’re like me, you might already have realized that you’ve used one of these words incorrectly in a discussion about React. Especially when it comes to elements and components, the words are also used in more general ways so it’s easy to confuse them. That’s why it’s important to clarify the context for how you’re using these words. Usually, simply adding ‘React’ in front of ‘element’ or ‘component’ can help everyone follow you.

I also found that, when I tried to explain higher order components to a coworker, I couldn’t clearly articulate what I knew. That made it so even though we took the time to try to close a communication gap, we couldn’t quite do it on the spot. (It also led me to do the research that ultimately led to this blog post.)

Hopefully, this article has helped you to solidify your understanding of these concepts so you can use them confidently and help clear up any miscommunications that may happen to you and your team. Thanks for reading!

## Other Resources
To continue reading about this subject, I recommend checking out these other great articles:
- The React introduction pages for [Elements](https://reactjs.org/docs/rendering-elements.html) and [Components](https://reactjs.org/docs/components-and-props.html) (in that order)
- Dan Abramov's article about [React Components, Elements, and Instances](https://medium.com/@dan_abramov/react-components-elements-and-instances-90800811f8ca)
