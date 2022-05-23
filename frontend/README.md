# MERN TUT Frontend 
> Frontend application for the mern application

## Installation
- npm install
- npm run dev
- npm run build
- npm run test
- npm run start

## Redux Usage
- We are using redux on authentication
- login register and logout ( clear out local storage )
- Using redux thunk as middleware which returns functions instead of object
- It is asynchronous

### Redux Thunk 

- Middleware that allows to return functions, rather than just actions.
- it allows for delayed actions, including working with promises.

### Code snippets 

- Conditional statements 
```js
{user ? () : ()}
```
- This means **`if user than show something :or show something else`**