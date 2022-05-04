import axios from 'axios'
export async function invokeStockFunction(){

    try{
        const res=await axios.get("/.netlify/functions/stock-data");
        // const res=await axios.get("http://localhost:8888/.netlify/functions/stock-data");
        // console.log(res);
        return res;
    }
    catch(inError){
        console.log(inError);
    }
}

export async function invokeUserFunction(){

    try{
        const res=await axios.get("/.netlify/functions/user-details");
        console.log(res);
        return res;
    }
    catch(inError){
        console.log(inError);
    }
}