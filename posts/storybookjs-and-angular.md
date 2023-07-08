---
title: 'Get Started with Storybook.js and Angular (w/ Tailwind CSS)'
subtitle: 'A Simple Guide to Integrating Angular Components Into The Storybook Design Ecosystem'
date: '2021-08-30T13:07:44.675Z'
thumbnail: '/blog-imgs/storybook.png'
---

# Introduction
Recently I've been soaking up as much about Angular as can find time to as I'm a bit new to the framework (and will be starting a job soon where I'll be working with it). This process lead me to wonder how to integrate Storybook.js into Angular apps. Since I learn better when I document my learning I will summarize my findings here.

Also here is the link to the [GitHub repo](https://github.com/bradscottwhite/sb-ng-demo) as well as the [live site](https://bradscottwhite.github.io/sb-ng-demo/).

# Setting Up an Angular App w/ Tailwind
First, let's create our Angular app and move into it's root directory:
<script src="https://gist.github.com/bradscottwhite/f1e9d5978ed69b3ffa80fa6afbdf6c42.js"></script>

## Integrate Tailwind Into Our App
Second, let's install and initialize Tailwind:
<script src="https://gist.github.com/bradscottwhite/7236e308ca7056f4b70a195e6ce7bec8.js"></script>

## Configure Tailwind In Our App
Finally, let's configure the content of the template paths in the tailwind.config.js file:
<script src="https://gist.github.com/bradscottwhite/18545b2d18980e156c7cd7883a0e79bc.js"></script>

Create a Simple Button Component
Before we worry about Storybook let's first generate a simple button component that we can later use to test:
<script src="https://gist.github.com/bradscottwhite/a383421abce1f2a4f079e2c56d659f23.js"></script>

## Adding Parameters to The Component
Now let's add a color parameter to the button in its component.ts file:
<script src="https://gist.github.com/bradscottwhite/dd95e4b2b76f535f7ae40fc47cfda6e6.js"></script>

## Adding a Template to The Component
Finally, let's add the template markdown to our button:
<script src="https://gist.github.com/bradscottwhite/5a272257c7a4eccafc0ad68526292a08.js"></script>

<b>NOTE: the 'ng-content' tag is for the button's inner text.</b>

## Adding The Component Within Our App
Now let's add our button component to our app in the app.component.html file:
<script src="https://gist.github.com/bradscottwhite/cb7076f4fb6a0b502436255da816692b.js"></script>

Let's also run our app to make sure things are running smoothly:
<script src="https://gist.github.com/bradscottwhite/f51330c78371cf24536b59feb5faebab.js"></script>

It should look like this:
![storybook ng pic 1.1](/blog-imgs/storybook-ng-1.1.png)

# Integrating Storybook.js Into Angular
Now that we have our component to test, let's shift to working with Storybook.

## Setting up Storybook.js
First, let's install Storybook.js into our Angular app as well as start it up:
<script src="https://gist.github.com/bradscottwhite/10f07089295a3fa798c04b9e37e6fdc0.js"></script>

## Create Story for Component
Next, let's integrate our button component into Storybook by creating a file called 'stories/Btn.stories.ts':
<script src="https://gist.github.com/bradscottwhite/c3c5953dbdc1c1db584108da877b1ee7.js"></script>

# Using Storybook.js
Finally, visit page localhost:6006 and navigate to Component/Button in the sidebar to view our component.
![storybook ng pic 1.2](/blog-imgs/storybook-ng-1.2.png)
