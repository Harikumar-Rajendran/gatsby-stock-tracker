var faunadb = require('faunadb'), q = faunadb.query
exports.handler = async function (event, context) {
    var client = new faunadb.Client({ secret: 'fnAEl0j-irAAR6IX8lj9-7TNb7xdkczzIvAjaTsK', domain: "db.us.fauna.com" })  
    const data = JSON.parse(event.body)
    const id = getId(event.path)
    return client.query(q.Update(q.Ref(`${id}`), { data }))
        .then((response) => {
            return ({
                statusCode: 200,
                body: JSON.stringify(response)
            })
        }).catch((error) => {
            console.log("error", error)
            return ({
                statusCode: 400,
                body: JSON.stringify(error)
            })
        })
}