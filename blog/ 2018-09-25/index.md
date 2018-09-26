---
date: "2018-09-25"
title: "Post About Website"
category: "Technology"
---

#  How I Overhauled My Website in About a Day

I had been putting off redesigning my website for way too long. Everytime I thought, "Dude, you *need* to update your site...like yesterday," I also remembered all of the steps that would take:

1. Choose something to update like adding a new project.
1. Go make sure the project looks good on GitHub and wherever it's hosted.
1. Write up a short explanation for it.
1. Screenshot it or pick a nice image to represent it.
1. And *NOW* I can actually start the website update...by trying to remember my AWS password (my last host).
1. After I give up on guessing my password, I go through the annoying process of resetting it.
1. Now that I'm logged into my host, I'm ready to update my page - HTML & content - and upload the photo.
1. If all goes well, that's it.

Phew! I know I'm being a little dramatic and some of those steps could be simplified if I took the time to work on them, but it really was a burden that I didn't want to mess with.

And that's why my site languished in its outdated state for a long time until one day I had...

## An Important Conversation

As part of my growth as a developer, I try to meet up with other developers - especially people who are more experienced than I am.

One such conversation was with a Senior Developer over coffee. In addition to getting his take on the market, finding out about what he did and what technologies he used, I also asked him about his suggestions for some typical development tasks. Specifically, what tech stacks he recommended for simple web sites - like my portfolio and blog.

Since I had heard a lot about Gatsby recently, I asked what he thought about it and he encouraged me to try it out. The biggest thing he said was to spend no more than half a day or so. If you can't get it working by then, try something else.

This seemed wise - what's half a day to maybe get my site updated and looking more sylish, right?

## My First Static Site Generator 

I know Gatsby is more than a static site generator, but for my site that's really all I needed from it. And its website was very encouraging:

1. Install Gatsby.
1. Start a new project from a template.
1. Run `gatsby develop` to host a live-reloading version of your site locally as you edit.
1. Run `gatsby build` to create the polished, web-ready version of your site.

That is somewhat simplified, because I did have to choose a template, but that's the only other thing I needed to get off an running.

## The Joy of Editing and React

As I got into the groove of editing, it was awesome to see my site update on every file save. I've had this type of experience on CodePen and various other places, but Gatsby's version just works well.

I also enjoyed how React was integrated into the project. Making changes to the actual layout or functionality of the site was easy because I'm very familiar with React - I use it at work right now and love it!

Time flies as I enjoy the process of taking the template I started with and making it my own. Before I knew it, I was looking at a modern, professional version of my site - I was ready to show it to the world!

## The Hiccups Begin

And here is where I hit my first problem.

When I went to build my site, the command failed! I had spent hours writing, sourcing images and taking screenshots, and tweaking the look of this site and now it was all going to be for nought!

I hated how perfectly Gatsby had got me off and running only to dash my hopes near the end!

But being a good developer, I started to troubleshoot. That is, I Googled the error code. It wasn't popular and most of the hits were from GitHub issues. I don't want to find out other people are having the same problem and they think it's the software itself...

After some researching and back-tracking, I figured the problem must be that my starter template was for Gatsby v1 and I had installed the latest version - Gatsby v2. The docs had a process for converting a project from v1 to v2, but it looked long and tedious.

More searching led me to a potential problem in one of Gatsby's dependencies used for CSS processing. I easily wasted an hour trying to bypass that part of the build to no avail.

I want to take a moment to point out that somewhere in here would have been a good time to seek help from others. Finding a good place to get responsive help in working with Gatsby would have paid dividends both in getting a solution to my current problem and also in knowing where to go next time. I wanted to get the site finished quickly and I made myself feel like I didn't have time to wait for someone else to respond to my problem. I definitely think this was a mistake.

## Inspiration

I don't know when it hit me, but I finally considered another solution: Instead of trying to make my v1 Gatsby starter work with v2, why not just use Gatsby v1?

I couldn't find documentation on the Gatsby website about how to choose an older version of Gatsby so it took me a while, but I eventually figured out the correct command to have npm install an older version of Gatsby. (In hindsight, I don't really blame the folks at Gatsby for this - if I'm going to use a tool like npm, I should probably figure out how to use it!)

Sure enough, with that done I was building my site and happy as a clam.

## Tl;dr ( A.k.a. Summary)
I think I've reached a good length for this post so I'm going to cover deployment of the site in another post - stay tuned! Before leaving though, here's what I learned about redesigning a web site (or building from scratch):

* Use a static site generator and starter template or theme. Build off the work of others!
* Build it first! Sort out any problems before you start spending time on your own content.
* Give yourself time so you can ask others for help. I wanted to GET IT DONE and gave myself an unhelpful time crunch that eliminated seeking help from others.
* Enjoy the beauty of modern development tools!
