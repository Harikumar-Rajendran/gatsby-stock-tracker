var faunadb = require('faunadb'),
  q = faunadb.query
exports.handler=async function(event,context){

    //fauna code 
   var client = new faunadb.Client({ secret:'fnAEl0j-irAAR6IX8lj9-7TNb7xdkczzIvAjaTsK' ,domain: "db.us.fauna.com"})

    
    var createP = client.query(
                q.Create(q.Collection('users'), { data: { userName: 'tom@gmail.com' ,roleName:'Analyst' }})
      );
        
     createP.then(function(response) {
                console.log(response.ref) // Would log the ref to console.
        })
    
    return{
        statusCode:200,
        body:JSON.stringify({messge:"HelloWorld"})
    };
}