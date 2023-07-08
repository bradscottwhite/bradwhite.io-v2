---
title: 'A Guide to Deploying Your First Lambda Rest API In Node (part 1)'
subtitle: 'Building a Simple Lambda Function'
date: '2021-08-30T13:07:44.675Z'
thumbnail: '/blog-imgs/code-bg.png'
---

## Introduction
When I deployed my first useable Lambda Rest API on AWS I quite frankly had a hard time. Building a basic function was simple and so was building the front end for the most part. It was setting up this function to run and be useable that gave me some trouble. I had to dig around the interwebs for a couple of days to finally figure it out. So now that I have figured it out I'm going to share this information so others can learn quicker with less hassle.
To make things easier to follow this will be split into three parts: building the Rest API, deploying it and interacting with it. I will be using JavaScript, Node.js and React as well as the AWS CLI for this project. Also, the code will be available on GitHub here for the function and here for the front end.
To be able to use AWS Lambda functions you need to have an account on AWS. If you don't have one yet create an account and register on the 'free tier'. You will need to be signed into the AWS CLI.

## Setting Up Our Environment
First, open your terminal and create and move into a new directory:


<!-- mkdir lambda-fn-demo && cd lambda-fn-demo -->
<script src="https://gist.github.com/bradscottwhite/8b44a8f4215302b765206c7f1a2a43d5.js"></script>

Now initialize a new Node.js project and create an index file that will store our function:

<!--npm init -y
touch index.js-->
<script src="https://gist.github.com/bradscottwhite/231491840116f97676d685d2f9a4d846.js"></script>

## Building The Function/API
To build our Rest API, open the index.js file in your editor of choice (for me NeoVim) and we'll use the following code:

<!--exports.handler = async event => {
    let body = {};

    if (event.body !== null && event.body !== undefined) {
        let { name } = JSON.parse(event.body); // Retrives the input

        body = { msg: `Hello ${name}!` }; // Message to output
    }

    // Send response back to UI:
    return {
        statusCode: 200, // Sets status to successful
        headers: { // Sets headers:
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
            'X-Requested-With': '*'
        },
        body: JSON.stringify(body)
    };
};-->
<script src="https://gist.github.com/bradscottwhite/c0c67331a2fdc4942119b11917619331.js"></script>

This code is fairly self-explanatory so I will just run through the highlights. We export an async function called handler that takes a variable that we call event. The event variable gives us our parameters (in this example: name). We then return a JSON object with our status code (set to 200 or successful), our headers (which we will need later when we are interacting with it in the next tutorial) and our body which sends a JSON object back to the user.
Now that we have built our function we need to deploy it to the cloud. To do this our function needs to be zipped up as follows: (if we were to install some packages we would need to include the package.json and package-lock.json file and the node-modules folder)

<!--zip -r fn.zip index.js-->
<script src="https://gist.github.com/bradscottwhite/dc5a2522a1c0de85fd8558a0ce9bf8dd.js"></script>

We now switch to using the AWS CLI to send our function to the cloud.

Creating a Role For Our Function
To do this we will need to make a new role for our function. This is done to grant the function permission to do actions in AWS. First create a policy JSON file:

<!--touch trust-policy.json-->
<script src="https://gist.github.com/bradscottwhite/4f4dedd3a35df48b34bb1b5695baa1cb.js"></script>

Then give it the following object:


<!--{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}-->
<script src="https://gist.github.com/bradscottwhite/fde3c1542c6aef514e2066703de35ecd.js"></script>

Next, we'll save the role name as an environment variable for future reference:


<!--LAMBDA_ROLE_NAME='basic-lambda-role'-->
<script src="https://gist.github.com/bradscottwhite/9ecc49c62018cbe77b1c864e7237e5b2.js"></script>


Finally, we can create our role called basic-lambda-role using the policy file:


<!--aws iam create-role \
    --role-name $LAMBDA_ROLE_NAME \
    --assume-role-policy-document file://trust-policy.json-->
<script src="https://gist.github.com/bradscottwhite/715b72131ccca2a5fd9273826a592f5a.js"></script>

This will return a JSON object of our new role data. We can now set an environment variable with the ARN (Amazon Resource Name) to use in deploying our function with this command:


<!--LAMBDA_ROLE_ARN=$(aws iam get-role \
    --role-name $LAMBDA_ROLE_NAME \
    --query Role.Arn \
    --output text)-->
<script src="https://gist.github.com/bradscottwhite/50608959865eb34248bb9e9f67e1efbd.js"></script>


Now that we have our role and its ARN we can move on to sending our function to the cloud.

## Shipping Our Function/API
Finally, to deploy our function we create an environment variable and run the following with the AWS role ARN:


<!--LAMBDA_NAME='lambda-fn-demo'

aws lambda create-function \
    --function-name $LAMBDA_NAME \
    --runtime nodejs14.x \
    --zip-file fileb://fn.zip \
    --handler index.handler \
    --role $LAMBDA_ROLE_ARN-->
<script src="https://gist.github.com/bradscottwhite/bb5d5d577c97c5563c2b0294bcb337eb.js"></script>

## Wrapping Up
Now that we have built a working Lambda function, the next step is to create an API Gateway which we will do in part two.
