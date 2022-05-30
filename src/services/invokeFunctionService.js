import axios from 'axios'
export async function getStockData() {

    try {
        const res = await axios.get("/.netlify/functions/stock-data");
        // const res=await axios.get("http://localhost:8888/.netlify/functions/stock-data");
        // console.log(res);
        return res;
    }
    catch (inError) {
        console.log(inError);
    }
}

export async function getUserList() {

    try {
        const res = await axios.get("/.netlify/functions/user-details");
        console.log(res);
        return res;
    }
    catch (inError) {
        console.log(inError);
    }
}

export async function postRoute() {

    try {
        const res = await axios.get("/.netlify/functions/add-api");
        console.log(res);
        return res;
    }
    catch (inError) {
        console.log(inError);
    }
}

// Function using fetch to POST to our API endpoint
export function createUser(data) {
    return axios.post('/.netlify/functions/add-user', {
        body: JSON.stringify(data)
    }).then(response => {
        return response
    })
}

export const readAll = () => {
    return axios.get('/.netlify/functions/read-all').then((response) => {
        return response
    })
}

export const readUser = () => {
    return axios.get('/.netlify/functions/read-user').then((response) => {
        return response
    })
}

export const update = (todoId, data) => {
    return axios.post(`/.netlify/functions/update-user/${todoId}`, {
        body: JSON.stringify(data)
    }).then(response => {
        return response
    })
}

export const deleteTodo = (todoId) => {
    return axios.post(`/.netlify/functions/todos-delete/${todoId}`, {
    }).then(response => {
        return response
    })
}