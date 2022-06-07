import React, { useEffect, useState } from 'react';
import { getData } from '../services/invokeFunctionService';
import 'devextreme/dist/css/dx.light.css';
import {GetRequiredStockData} from '../helper/util';
import Stock from '../components/Stock/Stock';
import './index.css';

export default function StockMarket() {
    const [data, setData] = useState(null);

    async function invokefunction() {
        const stock = await getData('stock-data');        
        setData(GetRequiredStockData(stock.data.data.quoteResponse.result));
    }

    useEffect(() => {
        invokefunction();
    }, [])

    return (
        <div className='Appcontainer'>
            <Stock data={data} />
        </div>
    );
}
