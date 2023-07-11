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
<pre class='command-line'><code class='language-bash' data-prismjs-copy='Copy'>ng n sb-ng-demo && cd sb-ng-demo</code></pre>

## Integrate Tailwind Into Our App
Second, let's install and initialize Tailwind:
<pre class='command-line'><code class='language-bash' data-prismjs-copy='Copy'>npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init</code></pre>

## Configure Tailwind In Our App
Finally, let's configure the content of the template paths in the tailwind.config.js file:
<pre><code class='language-css' data-prismjs-copy='Copy'>@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>

Create a Simple Button Component
Before we worry about Storybook let's first generate a simple button component that we can later use to test:
<pre class='command-line'><code class='language-bash' data-prismjs-copy='Copy'>ng g c btn</code></pre>

## Adding Parameters to The Component
Now let's add a color parameter to the button in its component.ts file:
<pre><code class='language-ts' data-prismjs-copy='Copy'>import { Component, Input } from '@angular/core'; // Import input decorator

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {

  // Add input decorator
  @Input()
  color?: string; // Add color param

}</code></pre>

## Adding a Template to The Component
Finally, let's add the template markdown to our button:
<pre><code class='language-html' data-prismjs-copy='Copy'>&lt;button
    class='text-lg rounded-xl px-4 py-2 mx-6 my-4 text-white shadow-xl border-slate-400/50 border-2'
    [ngClass]="color === 'primary' ? 'bg-blue-700 hover:bg-blue-800' : 'bg-slate-500 hover:bg-slate-600'"
&gt;
  &lt;ng-content&gt;&lt;/ng-content&gt;
&lt;/button&gt;</code></pre>

<b>NOTE: the 'ng-content' tag is for the button's inner text.</b>

## Adding The Component Within Our App
Now let's add our button component to our app in the app.component.html file:
<pre><code class='language-html' data-prismjs-copy='Copy'>&lt;app-btn color='primary'&gt;Button&lt;/app-btn&gt;
&lt;app-btn&gt;Button&lt;/app-btn&gt;</code></pre>

Let's also run our app to make sure things are running smoothly:
<pre class='command-line'><code class='language-bash' data-prismjs-copy='Copy'>ng serve --open</code></pre>

It should look like this:
![storybook ng pic 1.1](/blog-imgs/storybook-ng-1.1.png)

# Integrating Storybook.js Into Angular
Now that we have our component to test, let's shift to working with Storybook.

## Setting up Storybook.js
First, let's install Storybook.js into our Angular app as well as start it up:
<pre class='command-line'><code class='language-bash' data-prismjs-copy='Copy'>npx sb init

npm run storybook</code></pre>

## Create Story for Component
Next, let's integrate our button component into Storybook by creating a file called 'stories/Btn.stories.ts':
<pre><code class='language-ts' data-prismjs-copy='Copy'>import { Story, Meta } from '@storybook/angular/types-6-0';
import { BtnComponent as Btn } from '../app/btn/btn.component'; // Import btn component

export default {
  title: 'Component/Button', // Name the story
  component: Btn,
  argTypes: {}
} as Meta;

const Template: Story<Btn> = (args: Btn) => ({
  props: args,
  // This is our template for our btn:
  template: `
    &lt;app-btn [color]="color"&gt;
      This is a template test.
    &lt;/app-btn&gt;`,
});

// This displays a simple example of the component
export const SimpleExample = Template.bind({});

// This displays the component with the color as primary
export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
} as Partial<Btn>;</code></pre>

# Using Storybook.js
Finally, visit page localhost:6006 and navigate to Component/Button in the sidebar to view our component.
![storybook ng pic 1.2](/blog-imgs/storybook-ng-1.2.png)
