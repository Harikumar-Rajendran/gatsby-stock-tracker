import React, { useEffect, useState } from 'react';
import { getData, postData } from '../services/invokeFunctionService';
import { ParseData } from '../helper/util';
import API from '../components/API/API';
import './index.css';

export default function ManageAPI() {
    const [data, setData] = useState(null);
    const [resp, setResp] = useState(false);
    function invokeCreateFunction(newRoute) {
        setResp(false);
        if (newRoute.pApiID !== '' && newRoute.pMethod !== '' && newRoute.pEndPoint !== '') {
            postData('add-api', newRoute).then((response) => {
                console.log('API response', response)
                setResp(true);
                invokeReadFunction();
            }).catch((error) => {
                console.log('API error', error)
            })
        }
    }

    function invokeReadFunction() {
        getData('read-api').then((response) => {
            console.log('API response', ParseData((response.data)));
            setData(ParseData((response.data)))
        }).catch((error) => {
            console.log('API error', error)
        })

    }

    useEffect(() => {
        invokeReadFunction();
    }, [])

    return (
        <div className='Appcontainer'>
            <API data={data} PostData={invokeCreateFunction} PostResponse={resp}/>
        </div>
    );
}
