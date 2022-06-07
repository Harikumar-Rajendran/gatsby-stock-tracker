import axios from 'axios'

const baseURL = '/.netlify/functions/';
export async function getData(url) {
    // "/.netlify/functions/stock-data"
    try {
        const res = await axios.get(baseURL+url);        
        return res;
    }
    catch (inError) {
        console.log(inError);
    }
}


// export const readAll = () => {
//     return axios.get('/.netlify/functions/read-all').then((response) => {
//         return response
//     })
// }
// export async function getUserList() {

//     try {
//         const res = await axios.get("/.netlify/functions/user-details");
//         console.log(res);
//         return res;
//     }
//     catch (inError) {
//         console.log(inError);
//     }
// }

// export async function postRoute() {

//     try {
//         const res = await axios.get("/.netlify/functions/add-api");
//         console.log(res);
//         return res;
//     }
//     catch (inError) {
//         console.log(inError);
//     }
// }

// Function using fetch to POST to our API endpoint
export function postData(url,data) {
    // '/.netlify/functions/add-user'
    return axios.post(baseURL+url, {
        body: JSON.stringify(data)
    }).then(response => {
        return response
    })
}


export const updateData = (Id, data) => {
    return axios.post(`/.netlify/functions/update-user/${Id}`, {
        body: JSON.stringify(data)
    }).then(response => {
        return response
    })
}

export const deleteData = (Id) => {
    return axios.post(`/.netlify/functions/todos-delete/${Id}`, {
    }).then(response => {
        return response
    })
}