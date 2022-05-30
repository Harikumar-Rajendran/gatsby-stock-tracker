var faunadb = require('faunadb'), q = faunadb.query
exports.handler = async function (event, context) {

    //fauna code 
    var client = new faunadb.Client({ secret: 'fnAEl0j-irAAR6IX8lj9-7TNb7xdkczzIvAjaTsK', domain: "db.us.fauna.com" })
    /* parse the string body into a useable JS object */
    const data = JSON.parse(event.body)
    console.log("Function `todo-create` invoked", data)
    const createItem = {
        data: data
    }
    /* construct the fauna query */
    return client.query(q.Create(q.Collection("Users"), createItem))
        .then((response) => {
            console.log("success", response)
            /* Success! return the response with statusCode 200 */
            return ({
                statusCode: 200,
                body: JSON.stringify(response)
            })
        }).catch((error) => {
            console.log("error", error)
            /* Error! return the error with statusCode 400 */
            return ({
                statusCode: 400,
                body: JSON.stringify(error)
            })
        })
}