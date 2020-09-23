/* Pulling All Events From FaunaDB */

const faunadb = require('faunadb')
const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})

exports.handler = (event, context, callback) => {
  console.log("PULLING ALL EVENTS FROM FAUNADB")
  return client.query(q.Paginate(q.Match(q.Ref("indexes/all_events"))))
  .then((response) => {
    const eventRefs = response.data
    console.log("Event Ref", eventRefs)
    console.log(`${eventRefs.length} events found`)
    // create new query out of todo refs. http://bit.ly/2LG3MLg
    const getAllEventDataQuery = eventRefs.map((ref) => {
      return q.Get(ref)
    })
    // then query the refs
    return client.query(getAllEventDataQuery).then((ret) => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(ret)
      })
    })
  }).catch((error) => {
    console.log("error", error)
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    })
  })
}