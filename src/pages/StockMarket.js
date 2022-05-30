import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import { Column } from 'devextreme-react/data-grid';
import MyDrawer from '../components/common/drawer';
import { getStockData } from '../services/invokeFunctionService';
import 'devextreme/dist/css/dx.light.css';
import DevXDataGrid from '../components/common/datagrid';
import './index.css';

export default function StockMarket() {
    const [data, setData] = useState(null);
    const pageSizes = [10, 25, 50, 100];

    async function invokefunction() {
        const stock = await getStockData();        
        getRequiredData(stock.data.data.quoteResponse.result);
    }

    function getRequiredData(stockData) {

        const sData = [];
        stockData.map((item)=>{
            const row = {
                "region": item.region,
                "quoteSourceName": item.quoteSourceName,
                "quoteType": item.quoteType,
                "currency": item.currency,
                "exchange": item.exchange,
                "marketCap":item.marketCap,
                "symbol":item.symbol,
                "targetPriceHigh":item.targetPriceHigh,
                "totalCash":item.totalCash
            }
        sData.push(row)
        console.log(sData);
        setData(sData)
        })
    }

    const columns = () => {
        return (
            <>
                <Column dataField="region" dataType="string" />
                <Column dataField="quoteSourceName" dataType="string" />
                <Column dataField="quoteType" dataType="string" />
                <Column dataField="currency" dataType="string" />
                <Column dataField="exchange" dataType="string" width={150} />
                <Column dataField="marketCap" dataType="number" />
                <Column dataField="symbol" dataType="string" />
                <Column dataField="targetPriceHigh" dataType="string" />
                <Column dataField="totalCash" dataType="string" />

            </>
        )
    }

    return (
        <div className='Appcontainer'>
            <MyDrawer />
            <div>
                <Button onClick={invokefunction}>Get Data</Button>
                <DevXDataGrid
                    data={data}
                    GroupPanel={true}
                    SearchPanel={true}
                    columns={columns}
                />
            </div>
        </div>
    );
}
