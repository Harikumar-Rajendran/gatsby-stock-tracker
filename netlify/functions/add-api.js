var faunadb = require('faunadb'), q = faunadb.query
exports.handler = async function (event, context) {

    //fauna code 
    var client = new faunadb.Client({ secret: 'fnAEl0j-irAAR6IX8lj9-7TNb7xdkczzIvAjaTsK', domain: "db.us.fauna.com" })
    var res = '';

    var createP = client.query(
        q.Create(q.Collection('Routes'), { data: { method: 'Get', endPoint: 'https://rapidapi.com/apidojo/api/yh-finance', headers:'x-rapidapi-host:yahoofinance-stocks1.p.rapidapi.com;x-rapidapi-key:6bfd3bf9a0mshd637ef7ccc19913p1fe183jsn7b632bfd5cd0', parameters:'q:tesla; region:US' } })
    );

    createP.then(function (response) {
        res = response
        console.log(response.ref) // Would log the ref to console.
        return ({
            statusCode: 200,
            body: JSON.stringify(response)
          })
    }).catch((e) => {
        res=e.message
        console.log(e.message)
        return ({
            statusCode: 400,
            body: JSON.stringify(error)
          })
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ messge: res })
    };
}