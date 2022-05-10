// var faunadb = require('faunadb'), q = faunadb.query
// exports.handler = async function (event, context) {

//     //fauna code 
//     var client = new faunadb.Client({ secret: 'fnAEl0j-irAAR6IX8lj9-7TNb7xdkczzIvAjaTsK', domain: "db.us.fauna.com",timeout: 30, })
//     var res = '';

//     var createP = client.query(
//         q.Create(q.Collection('Users'), { data: { firstName:'Robbin', lastName:'Williams', userID: 'Robbin.W@gmail.com', roleName: 'Analyst' } })
//     );

//     createP.then(function (response) {
//         res = response
//         console.log(response.ref) // Would log the ref to console.
//         return ({
//             statusCode: 200,
//             body: JSON.stringify(response)
//           })
//     }).catch((e) => {
//         res=e.message
//         console.log(e.message)
//         return ({
//             statusCode: 400,
//             body: JSON.stringify(error)
//           })
//     });

//     // return {
//     //     statusCode: 200,
//     //     body: JSON.stringify({ messge: res })
//     // };
// }