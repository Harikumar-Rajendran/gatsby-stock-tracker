import axios from 'axios'
export async function invokeStockFunction(){

    try{
        const res=await axios.get("/.netlify/functions/stock-data");
        console.log(res);
    }
    catch(inError){
        console.log(inError);
    }
}

export async function invokeUserFunction(){

    try{
        const res=await axios.get("/.netlify/functions/user-details");
        console.log(res);
    }
    catch(inError){
        console.log(inError);
    }
}