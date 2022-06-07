var faunadb = require('faunadb'), q = faunadb.query

exports.handler = async function (event, context) {
  var client = new faunadb.Client({ secret: 'fnAEl0j-irAAR6IX8lj9-7TNb7xdkczzIvAjaTsK', domain: "db.us.fauna.com" })
  console.log(`Function invoked. Read all Stock:`)
  return client.query(q.Paginate(q.Documents(q.Collection('Stock'))))
      .then((response) => {
          const allRefs = response.data
          const getAllDataQuery = q.Get(allRefs[(allRefs.length)-1])
          console.log('Record ID',getAllDataQuery);
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
