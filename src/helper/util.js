export const ParseUser = (userList) => {
    const Users = [];
    userList.map(item=>{
        Users.push(JSON.parse(item.data.body));
      }); 
    return Users;
};