/* Pulling Event by ID From FaunaDB */

const faunadb = require('faunadb')
const getId = require('./utils/getId')

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})

exports.handler = (event, context, callback) => {
	console.log("PULLING EVENT DETAIL ID from Path", event.path)
	const id = getId(event.path)

	console.log(`Function to Pull Individual Event Detail. Read id: ${id}`)
	
	return client.query(q.Get(q.Ref(`classes/programming_events/${id}`)))
	.then((response) => {
		console.log("success", response)
		return callback(null, {
			statusCode: 200,
			body: JSON.stringify(response)
		})
	}).catch((error) => {
		console.log("error", error)
		return callback(null, {
			statusCode: 400, 
			body: JSON.stringify(error) 
		})
	})
}