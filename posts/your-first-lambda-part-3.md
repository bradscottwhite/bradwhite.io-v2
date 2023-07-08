---
title: 'A Guide to Deploying Your First Lambda Rest API In Node (part 3)'
subtitle: 'Building an App To Use Our API/Function'
date: '2021-08-30T13:07:44.675Z'
thumbnail: '/blog-imgs/code-bg.png'
---

## Introduction
In the last two tutorials, we built a Lambda function and an API Gateway to interact with it. In this tutorial, we will build an app that can use this API. It will use React.js as our base framework, Tailwind.css as our styling (to make things simple), and Axios as a library for making HTTP requests.

You can see the app in action here as well as the GitHub repo here.

Initializing The App
We will use 'create-react-app' for simplicity to set up our boilerplate React code as well as move into the root directory:
<script src="https://gist.github.com/bradscottwhite/2f74f6cec69e499f441aa8b37024ca4a.js"></script>

## Injecting The Dependencies
Next, we will install our dependencies which are Axios and Tailwind.css. Then run the 'init' command to generate a 'tailwind.config.js' file:
<script src="https://gist.github.com/bradscottwhite/b43d7c1ac0cf486701fdaf1d83a31784.js"></script>

## Setting Up Tailwind
To fully set up Tailwind.css we first need to make sure the 'tailwind.config.js' file knows which files to add styling to:
<script src="https://gist.github.com/bradscottwhite/9d4bdc2209d4cc95b57b84441a16cc36.js"></script>

Second, we need to include our Tailwind directives in the 'index.css' file located in the 'src' directory:
<script src="https://gist.github.com/bradscottwhite/a9959f32c12bc0a19500df8a3360b993.js"></script>

## Cleaning Up Our Files
Now we will clean up some boilerplate code we won't need:
<script src="https://gist.github.com/bradscottwhite/3a7465ece2ac0702288278f7ac792589.js"></script>

## Starting Our App
The main portion of our app rests within our 'App.js' file located in the 'src' directory. We will delete the existing code and start from scratch.

First, we will declare our imports which are 'useState' and 'axios', our URL variable which will be taken from the last tutorial and our App component:
<script src="https://gist.github.com/bradscottwhite/799394e52ee8903dab225157bf59b8a2.js"></script>

## Declaring State
Next, let's add some stores to our app: one to store the input from the user and another for the output from the API:
<script src="https://gist.github.com/bradscottwhite/90c890dbaf5dd34026c474256a841844.js"></script>

## Adding JSX and Tailwind
Next, let's add the markup as well as the Tailwind classes:
<script src="https://gist.github.com/bradscottwhite/f848f5dd0e59d5caf84d95df84434a74.js"></script>

## Fetching The Data
To finish up, let's add a function to call and fetch data from the rest API and update the Virtual DOM:
<script src="https://gist.github.com/bradscottwhite/1f5dd612f74633a4cb6aa1f0cbd73c47.js"></script>

## Running Our App
Finally, let's start our app from the root directory of our app:
<script src="https://gist.github.com/bradscottwhite/ef1d22553f0f04249225554babf6b6ba.js"></script>

Now if we open page 'localhost:3000' in our browser our app should run successfully.
![lambda 3.1 pic](/blog-imgs/lambda-3.1.png)
![lambda 3.2 pic](/blog-imgs/lambda-3.2.png)
![lambda 3.3 pic](/blog-imgs/lambda-3.3.png)
