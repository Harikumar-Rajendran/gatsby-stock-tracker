var faunadb = require('faunadb'), q = faunadb.query
exports.handler = async function (event, context) {
    var client = new faunadb.Client({ secret: 'fnAEl0j-irAAR6IX8lj9-7TNb7xdkczzIvAjaTsK', domain: "db.us.fauna.com" })
    console.log(`Function invoked. Read all:`)
    return client.query(q.Paginate(q.Documents(q.Collection('Users'))))
        .then((response) => {
            const allRefs = response.data
            const getAllDataQuery = allRefs.map((ref) => {
                return q.Get(ref)
            })
            return client.query(getAllDataQuery).then((ret) => {
                return ({
                    statusCode: 200,
                    body: JSON.stringify(ret)
                })
            })
        }).catch((error) => {
            console.log("error", error)
            return ({
                statusCode: 400,
                body: JSON.stringify(error)
            })
        })
}