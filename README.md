# @codewell/time-it-js

Calculate the execution time of a function in JavaScript.
Works with both sync and async functions. Always returns a promise.

## Installation

```
npm install @codewell/time-it
```

## Basic Usage

```JavaScript
import timeIt from '@codewell/time-it';

// Write examples here
const slowMessage = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, 1000);
    });
};

const message = await timeIt(slowMessage, "Description")("Hello, World!")
// Prints "Description: 1000ms" to the console
// and returns the message => "Hello, World!"

```

## Issues

Please help by posting issues here on github
