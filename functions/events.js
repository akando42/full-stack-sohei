const axios = require('axios')

const instance = axios.create({
  baseURL: '',
  timeout: 1000,
  auth: {
    username: '',
  	password: ''
  }
})

exports.handler = (event, context, callback) => {
  // "event" has informatiom about the path, body, headers etc of the request
  console.log('event', event)

  // "context" has information about the lambda environment and user details
  console.log('context', context)
  
  // The "callback" ends the execution of the function and returns a reponse back to the caller
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(
		[
		    {
		      "id": 5928101,
		      "user": {
		        "id": "abc123",
		        "name": "Adam"
		      },
		      "category": "animal welfare",
		      "organizer": "Adam",
		      "title": "Rabit Cabaret",
		      "description": "Yay felines!",
		      "location": "Meow Town",
		      "date": "2019-01-03T21:54:00.000Z",
		      "time": "2:00",
		      "attendees": []
		    },
		    {
		      "id": 8419988,
		      "user": {
		        "id": "abc123",
		        "name": "Adam"
		      },
		      "category": "animal welfare",
		      "organizer": "Adam",
		      "title": "Kitty Cluster",
		      "description": "Yay cats!",
		      "location": "Catlandia",
		      "date": "2019-01-31T22:09:00.000Z",
		      "time": "7:00",
		      "attendees": []
		    },
		    {
		      "id": 4582797,
		      "user": {
		        "id": "abc123",
		        "name": "Adam"
		      },
		      "category": "animal welfare",
		      "organizer": "Adam",
		      "title": "Puppy Parade",
		      "description": "Yay pups!",
		      "location": "Puptown ",
		      "date": "2019-02-02T23:27:00.000Z",
		      "time": "1:00",
		      "attendees": []
		    }
		  ]
    )
  })
}
	