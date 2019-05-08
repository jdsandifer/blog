---
date: "2018-09-27"
title: "How I Deployed My Web Site"
category: "Technology"
---

As promised, here is Part 2 of re-designing my web site. Check out Part 1 if you missed it.

## Netlify
I like to meet up with other developers outside my work from time to time to learn as much as I can about software, the industry, and new technologies. It's also fun swapping stories.

During one such conversation, I mentioned that I was looking for an easy way to host my website. It had to be free and ideally it supported some kind of continuous deployment.

His suggestion: **Netlify**. Here are some of the features they offer:
* *FREE* (for small sites) - This one is big for me right now. I don't need much and don't want to pay much.
* Continuous deployment with GitHub integration
* DNS Servers and Domain Management - My current domain name company doesn't have a great website. I love being able to just point my domain to Netlify's servers and manage everything via Netlify.

## Pushing From GitHub
Even though I didn't think of this as a requirement for my new hosting solution, I can't imagine ever going back! 
15 seconds from commit to updates live on my web site - this is a game changer for me. 
This is sooooo fast compared to how I used to update my website. 

I used to *hate* updating my website by uploading new files.
I also would have to test things out before uploading and check quickly after the new files went live to make sure everything was working correctly.
Combine that with the slow process of editing, saving, and checking the results in a browser and I was always putting off updating my website due to the hassle.

Now I can make quick changes to text or even simple code changes right on GitHub. 
Not only do the changes go live seconds after each commit, but there's also error checking baked into the build process. 
If anything goes wrong with the build, no changes make it to the site. This is nice insurance against mistakes making it online.

One other benefit: Any changes I make to my site are included in my GitHub history. 
I don't know how much stake hiring managers put in those green squares on my GitHub page, but I like the idea that I'm getting credit for all of the coding I'm doing.

## Web Page Testing
An important part of any website project is web page testing. Does your site load quickly, are you caching resources correctly, and is it accessible? Most of this is handled automatically by Gatsby so I don't have to worry about it, but it's important to check.

For all your website testing needs, go to [Web Page Test](https://www.webpagetest.org/).

## Progressive JPEG Compression
One thing that's not automatically handled by Gatsby is Progressive JPEG Compression. 
It's worth using technological advancements that solve problems and one recent solution in images is **progressive compression**. 
You've probably seen pictures online that load as blurry or very simple images, but get sharper or more complex after a few seconds. 
The idea is that this enables you to see the layout of the page and an approximation of the final image *very* quickly. 
Often that's all that's needed to give you context for what you're reading so I highly recommend taking advantage of it.

Here's a great [article about progressive JPEG's](https://cloudinary.com/blog/progressive_jpegs_and_green_martians) - it has green martians! (And useful information, too.)

The solution I chose to make progressive JPEG's was to install `mozjpeg` using Homebrew (on MacOS).
I wasted a lot of time learning about compiling from source code before I realized a Homebrew install was possible. 
I wish I had seen that earlier, but such is life. :-)

I'm currently running it from the command line by hand, but I plan to explore adding `mozjpeg` into my Gatsby configuration so I can automate the process.

## I Had Fun
Even as I write this blog post, I'm simply editing a file on GitHub. 
Sometimes I use my development environment, but other times I just edit right in my repo - it doesn't publish until I push to the master branch so it's safe to draft, revise, and tweak on GitHub!
Even after I commit on the master branch, nothing goes live unless everything compiles correctly so I know I'm safe from simple mistakes causing my site to go down.

In then end, I really like Netlify as a host, but the important thing is that I'm leveraging modern technology to make my life easier. 
Continuous deployment is an awesome tool that speeds up my web development and I highly recommend it!
