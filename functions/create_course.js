const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async (event, context) => {
    // Intiate the FaunaDB Client
    const client = new faunadb.Client({
        secret: process.env.FAUNADB_SERVER_SECRET
    })  

    // Parsing Receiving User Info
    const data = JSON.parse(event.body)
    const newCourse = {
        data: data
    }

    // Constract the Fauna Query
    return client.query(q.Create(q.Ref('classes/courses'), newCourse))
        .then((response) => {
            console.log('success', response)
            return {
                statusCode: 200, 
                body: JSON.stringify(response)            
            }
        }).catch((error) => {
            console.log('error', error)
            return {
                statusCode: 400,
                body: JSON.stringify(error)
            }
        })
}
	