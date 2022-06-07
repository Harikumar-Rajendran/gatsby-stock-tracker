import React, { useEffect, useState } from 'react';
import { getData, postData } from '../services/invokeFunctionService';
import { ParseData } from '../helper/util';
import User from '../components/User/User';
import './index.css';

export default function ManageUser() {
    const [data, setData] = useState(null);
    const [resp, setResp] = useState(false);
    function invokeCreateFunction(newUser) {
        setResp(false);
        if (newUser.uFName !== '' && newUser.uLName !== '' && newUser.uUserID !== '' && newUser.uRole !== '') {
            postData('add-user',newUser).then((response) => {
                console.log('API response', response)
                setResp(true);
                invokeReadFunction();
            }).catch((error) => {
                console.log('API error', error)
            })
        }
    }

    function invokeReadFunction() {
        getData('read-user').then((response) => {
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
            <User data={data} PostData={invokeCreateFunction} PostResponse={resp}/>
        </div >
    );
}
