var faunadb = require('faunadb'),
  q = faunadb.query

const data = {
  "user": [
    {
      "FirstName": "John",
      "LastName": "Doe",
      "Email": "John.Doe@gmail.com",
      "Role": "Analyst",
    },
    {
      "FirstName": "Harikumar",
      "LastName": "Rajendran",
      "Email": "r.hkumars@gmail.com",
      "Role": "Admin",
    },
    {
      "FirstName": "Harikumar",
      "LastName": "Rajendran",
      "Email": "harikumar.rajendran@cognizant.com",
      "Role": "Analyst",
    },
  ]
}

exports.handler = async function (event, context) {
  //fauna code 
  var client = new faunadb.Client({ secret: 'fnAEl0j-irAAR6IX8lj9-7TNb7xdkczzIvAjaTsK', domain: 'db.us.fauna.com' })
  var resp = "";
  var createP = client.query(
    q.Create(q.Collection('APIDetails'), { data: { userName: 'tom@gmail.com', roleName: 'Analyst' } })
  );

  createP.then(function (response) {
    console.log(response) // Would log the ref to console.
    resp = response;
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ messge: data })
  };
}