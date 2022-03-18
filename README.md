# MERN Stack app
> mern testing
## Run the App

- Run the backend **`npm run server`**
## Routes / API

- GET: **`api/v1/goals`**
- POST: **`api/v1/goals`**
```bash
curl --location --request POST 'http://localhost:5555/api/v1/goals' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'text=hello this is siat'
```
- PUT: **`api/v1/goals`**
- DELETE: **`api/v1/goals`**

## DB Connection 

- Added mongodb for database

## Folder Structure 

- **Backend** Folder contains the server codes
  - Config 
    - config files
  - Controllers
    - controllers
  - Middleware
    - error handling middleware (custom error handler)
    - auth middleware for authentication
  - Model
    - db structure & model

## Middleware 

- Auth middleware checks the token and verifies the user login 
- Middleware is the function that runs between the response and request cycle 