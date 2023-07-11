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
<pre class='command-line'><code class='language-bash' data-prismjs-copy='Copy'>npx create-react-app lambda-demo-app && cd lambda-demo-app</code></pre>

## Injecting The Dependencies
Next, we will install our dependencies which are Axios and Tailwind.css. Then run the 'init' command to generate a 'tailwind.config.js' file:
<pre class='command-line'><code class='language-bash' data-prismjs-copy='Copy'>npm i -D axios tailwindcss # Installs Axios and Tailwind.css

npx tailwindcss init # Creates tailwind.config.js file</code></pre>

## Setting Up Tailwind
To fully set up Tailwind.css we first need to make sure the 'tailwind.config.js' file knows which files to add styling to:
<pre><code class='language-js' data-prismjs-copy='Copy'>/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Adds paths to all of your template files:
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  // ...
  // ...
}</code></pre>

Second, we need to include our Tailwind directives in the 'index.css' file located in the 'src' directory:
<pre><code class='language-css' data-prismjs-copy='Copy'>@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>

## Cleaning Up Our Files
Now we will clean up some boilerplate code we won't need:
<pre class='command-line'><code class='language-bash' data-prismjs-copy='Copy'>cd src
rm App.css logo.svg</code></pre>

## Starting Our App
The main portion of our app rests within our 'App.js' file located in the 'src' directory. We will delete the existing code and start from scratch.

First, we will declare our imports which are 'useState' and 'axios', our URL variable which will be taken from the last tutorial and our App component:
<pre><code class='language-jsx' data-prismjs-copy='Copy'>import { useState } from 'react'; // For declaring state in React

import axios from 'axios'; // For fetching data from our API

const url = ***URL_FROM_LAST_TUTORIAL*** // Replace with the Rest API URL from the last tutorial

const App = () => {}; // This will be our App component where the body of our code will be

export default App;</code></pre>

## Declaring State
Next, let's add some stores to our app: one to store the input from the user and another for the output from the API:
<pre><code class='language-jsx' data-prismjs-copy='Copy'>// ...

const App = () => {
  const [ name, setName ] = useState(''); // This will store the input from the user
  const [ greetings, setGreetings ] = useState([]); // This will store the output from the API

  return ();
};

export default App;</code></pre>

## Adding JSX and Tailwind
Next, let's add the markup as well as the Tailwind classes:
<pre><code class='language-jsx' data-prismjs-copy='Copy'>// ...

const App = () => {
  // ...

  return (
    &lt;div className="bg-slate-200 grid h-screen place-items-center overflow-x-hidden"&gt;
      &lt;div className='bg-slate-400 px-16 py-10 mx-16 my-10 rounded-lg shadow-lg'&gt;
        &lt;h1 className='text-slate-200 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-2xl font-bold px-2 py-4'&gt;Testing Lambda Rest API&lt;/h1&gt;
        &lt;input
          className='rounded-lg px-4 py-1 mx-4 my-2 text-slate-500 shadow-md shadow-slate-500'
          value={name}
          placeholder='Enter name here'
          onChange={e => setName(e.currentTarget.value)}
        /&gt;
        &lt;button
          className='bg-green-600 hover:bg-green-700 px-4 py-2 mx-2 py-1 text-gray-200 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] transition ease-in-out delay-100 duration-150 hover:scale-110 rounded-lg shadow-md shadow-slate-500'
          onClick={fetchGreeting}
        &gt;Fetch Greeting&lt;/button&gt;

        {greetings[0] && &lt;h2 className='text-slate-200 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-xl px-2 py-4'&gt;API Outputs:&lt;/h2&gt;}
        &lt;div&gt;
          {greetings.map(msg => (
            &lt;div className='bg-green-600 opacity-75 rounded-lg px-6 py-4 mx-4 my-3 shadow-md shadow-slate-500'&gt;
              &lt;h3 className='text-gray-200 text-lg text-center'&gt;{msg}&lt;/h3&gt;
            &lt;/div&gt;
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
};

export default App;</code></pre>

## Fetching The Data
To finish up, let's add a function to call and fetch data from the rest API and update the Virtual DOM:
<pre><code class='language-jsx' data-prismjs-copy='Copy'>
// ...

const App = () => {
  // ...

  // Call and fetch data from the rest api:
  const fetchGreeting = () => {
    axios.post(url, { name })
      .then(res => {
        const { data } = res; // Data from api
        setGreetings([ ...greetings, data.msg ]); // Add message to the list
      })
      .catch(err => { // Log out the error:
        console.log(err);
      });
  };

  return ( /* ... */ );
};

export default App;
</code></pre>

## Running Our App
Finally, let's start our app from the root directory of our app:
<pre class='command-line'><code class='language-bash' data-prismjs-copy='Copy'>cd ..
npm run start</code></pre>

Now if we open page 'localhost:3000' in our browser our app should run successfully.
![lambda 3.1 pic](/blog-imgs/lambda-3.1.png)
![lambda 3.2 pic](/blog-imgs/lambda-3.2.png)
![lambda 3.3 pic](/blog-imgs/lambda-3.3.png)
