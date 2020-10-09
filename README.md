# full-stack-sohei

## Build Setup
# Reverse Engineering Everything

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ PORT=3001 yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# starting the netlify server
$ export FAUNADB_SERVER_SECRET=fnAD2Z6f8ZACDfcEBMhEiKcKQ5A0QtBsgekUbOnV
$ netlify dev
```

## Immediate Tasks
[X] Query Event Detail by ID from FaunaDB.
[X] Load Event Detail to Individual Event Page.
    - Get the ID from Client Data Package
    - Get the ID from Server Data Package.

[ ] Create New Event and Add to Database
[ ] Write Content for Philosophy Page

## Animations
[Animation]
(https://codepen.io/troydo42/pen/YzwVMLm?editors=1100)

[Elevator]
(http://tholman.com/elevator.js/)

## Features
Use VueX State Management for Authentication and User Progress.
https://nuxtjs.org/guide/vuex-store

Use MongoDB and GraphQL for Longterm State Management. 
https://github.com/akshayymahajan/netlify-functions-mongodb-graphql 

## Link to Database
Link to FaunaDB Database
```
https://dashboard.fauna.com/#auth=eyJhbGciOiJIUzI1NiJ9.eyJzaXRlX2lkIjoiYTQ3NTFhNWItMDZkZi00MzJiLTllNTEtOTY5YmIwOTY3MjJhIiwiYWNjb3VudF9pZCI6IjViNDgzZWZlYzk2NTkyNzA0YWUxYjljMiIsInJlbW90ZV9pZCI6ImE0NzUxYTViLTA2ZGYtNDMyYi05ZTUxLTk2OWJiMDk2NzIyYSJ9.YqooUS81YNDLaNh3esNoC9yxf48g6fTUY0HoyGvKmTM
```

## Test Netlify Functions Sample
```
$ netlify functions:invoke myfunction --payload './payloads/sample_user.json'
```