---
date: "2024-02-02"
title: "How to Be a Good PR Reviewer"
category: "Growth, PR Reviews"
---

The other day, one of my teammates asked me for advice about how to get better
at doing PR reviews. Here are some of the ideas I came up with:

## Read Code and Learn What Good Code Looks Like

To start with, it's important to understand the purpose of code:

_To define a process so people can understand it._

That's right, code is not for computers, it's for people. The computers will  
run assembly code that's very difficult for humans to read; we've developed
programming languages on top of that hard-to-read code to make it easier for us
to understand and discuss with others.

The code has to work, yes, but it's main goal after that is **to be readable**!

Here are a few things I expect from readable code:
- It's not too complex or surprising. It follows existing patterns.
- It's not too short or too long. It's concise.
- There's a decent chance a non-programmer could figure out what it's doing. It's 
  written in "human" as much as possible, not full of programmer jargon.

Reading good code can help you understand what that looks like and how to
suggest changes that will improve other people's code.

But where do you find good code?

Thankfully, other people have had the same question and answered it for us. Here
are a couple codebases that have some pretty good code:

- [Bulletproof React](https://github.com/alan2207/bulletproof-react)
- [Simorgh](https://github.com/bbc/simorgh)

And one person that created there own list: [Max Rozen](https://maxrozen.com/examples-of-large-production-grade-open-source-react-apps)

To start with - I recommend checking out JSX files (.jsx or .tsx) in a components 
directory if you can find it - it's often something like `src/app/components/`.

And here's a repo with suggestions about how to write good code: [clean-code-javascript][cc-js]

So read code. A lot. Stop and figure out what something confusing is about. Go to
some code that you don't know is good - see if you can tell whether it is or not. 
And of course, see if you can make your next PR look a little more readable, too!

As one final note, don't forget that there's a difference between good code and
style. There are many different ways to format and organize code - 2 spaces vs.
4 spaces vs. tabs for indentation, etc. Use the style guide for your
organization or try to get your team to agree on one from somewhere else and use
that. But style is just how the code is formatted. Good code can be created in
any style.

## Find Good Mentors and Teachers

There are a lot of software developers of all levels writing blog posts, making
videos, and recording podcasts about software. They'll all tell you what they
think is the best way and what they think you should know, but how to tell who
_really_ knows?

One good way to tell: **Do they talk about tradeoffs?**

Software engineering has a lot of tradeoffs:

- How good can we make the next feature vs. how fast can we get it to the users
- Using the first variable name that comes to mind vs. taking the time to
  brainstorm
- Picking a library you know vs. taking more time to research possible
  alternatives you'd have to learn how to use, but might work better
- Discussing coding styles with your team so there's a consisent, readable style
  vs. using that time to get more code written, even if it's harder to read

Different teams, projects, and technologies may cause one side of the tradeoff
to become more important so many of these don't have one right answer - it's all
about finding a good balance for your project and organization.

Let's look at some quick examples. Here's a more basic, surface-level
suggestion:

> Make sure your code is [DRY][wiki-dry]. If you're writing similar code in
> multiple places, create a function to do it in one place and call the
> function. This makes it so -you only have to edit one place if you need to
> change that code.

That's a great suggestion! It's definitely a skill you should develop and know
when to implement.

But check out a more advanced suggestion:

> Definitely think about making your code DRY, but don't rush into it. Before
> you create a function to replace code in multiple places, ask yourself: "Will
> these areas change for the same reason?" If I need to edit it in one place,
> will the others _definitely_ need to change, too. If you're not sure, wait.
>
> If the code isn't perfectly DRY, that's okay. Better a little "wet" code than
> too much coupling that makes the code difficult to change later.

Side note: For more info about the tradeoff's with DRY code, check out [Avoid
Hasty Abstractions (AHA)][kcd-aha]

## Improve Your Communication Skills

This is good advice for just about everyone everywhere. But in the context of PR
reviews, I 'm thinking about 2 specific goals:

1. Be consistently respectful (even if you have to be firm)
1. Be able to clearly share your point of view (even if you don't end up convincing
   them of your idea)

### Be Respectful (in every comment)

Here are some of my rules to keep my comments and communication respectful:

- Write things out: Don't leave off words to save time - it sounds terse, short,
  and potentially rude.
- Always talk about how "we" can do things to make "our" code better: If you're
  doing reviews, you're on some kind of team so keep that in your words, too.
  Besides, after a few suggestions from PR reviewers, it's no longer just code
  written by the PR author - it's code written by all of you!
- Write like you know you could be wrong: Use questions and phrases like "it
  seems like" and "I think" before comments like "this is no longer needed".
  (It's a lot easier when you do make a mistake, but it's also easier for the reader
  to take the feedback and really consider it.)
- Try to encourage discussion: Instead of just making a suggestion, consider
  opening up with a couple ideas and ask for additional ideas from the PR
  author. Even if you already have an idea, you never know what you might come
  up with together!

Examples:

> Can we remove this function? It looks like it's no longer needed.

Note the "we" and the question. Also "it looks like" - assuming you could be
wrong.

> How about we change this name from BookList to BookCollection?

It's a question and it's using "we".

> What do you think about trying to refactor this using a more general
> component?

Attempting to start a discussion about possibilities instead of making a
specific suggestion - a great way to leverage your team.

### Be Clear

Learning how to clearly communicate your thoughts takes time, but you can help
speed up the process with some deliberate steps:

1. Take notes of good exchanges where it's clear your comments were understood
   right away by the reader. How did you make your ideas clear?
1. Take notes of lengthy exchanges where you had to re-state your ideas multiple
   times - how did you say things when they were finally understood? How was that 
   different from the first comment you made?
1. Revise your comments to try and make them shorter without losing meaning or
   leaving out anything. Can you say the same thing with 75% of the words? Half?
   20%?
1. Ask for feedback every once in a while! E.g. "I noticed it took a while for us to reach an
   agreement in that discussion. Could I have done anything to make that
   easier?"

## Learn to Think About Risks, Value, and The Big Picture

### Risks

This is both a simple concept and a difficult one to measure well. Risks are
what could go wrong. If a variable name isn't perfect, the code will still work,
but it may be harder for other developers to read and understand. However if a
date isn't converted properly, that could lead to a significant bug. One clearly
matters more than the other because the risk is bigger.

Spend more time reading, thinking about, commenting on, and discussing riskier
parts of the PR.

Don't be afraid to leave off comments about refactoring, names, or small changes
to avoid distracting too much from risky areas that definitely need a change or a small
discussion to make sure things are handled the right way.

### Value

Finding bugs is the best. Suggesting refactorings that can make the code easier
to read or edit is super helpful. However the 20th name change is not as
important. And making too many suggestions about old code that wasn't changed
quickly becomes annoying.

Try to consider how much your suggestion will impact the users of your software,
the amount of money your company makes (if applicable), and how much your team
will appreciate the change. Then decide whether it's worth the time it'll take
to make it.

And if your Project Manager would love how it helped them meet the estimate they
shared with upper management - by avoiding a bug that would have delayed work or
ensuring something matched the specification so it would pass final testing -
that's always a high value!

### The Big Picture

Always take a moment to "step back" and think about the bigger ideas. Does the
code do what it's supposed to? Does the overall structure of the files and code
make sense? How long are you spending on the review?

Make sure you don't get stuck suggesting name changes and how to remove nested
ternaries and then forget to check the overall functionality or structure. Not
every possible improvement needs to be made on this PR.

Also, consider the number of commments - if you've got 50 comments on a small to
medium size PR, that's probably too many. Keep the most important ones and see
if you can delete a few without significant risks or loss of value.

## Conclusion
It takes many different skills to review PR's well. I think that working on 
recognizing readable code, finding good teachers, improving your communication, 
and remembering the big picture are good areas to focus on to increase your 
effectiveness with PR reviews.

I hope that's helpful and good luck with your reviews!

[cc-js]: https://github.com/ryanmcdermott/clean-code-javascript
[wiki-dry]: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[kcd-aha]: https://www.kentcdodds.com
