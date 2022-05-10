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
    ]}

exports.handler=async function(event,context){

    return{
        statusCode:200,
        body:JSON.stringify({messge:data})
    };
}