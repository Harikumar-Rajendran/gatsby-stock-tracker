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
        setData(stock.data.messge.quotes);
        console.log(stock);
    }

    const columns = () => {
        return(
            <>
                <Column dataField="exchange" dataType="string" />
                <Column dataField="shortname" dataType="string" />
                <Column dataField="quoteType" dataType="string" />
                <Column dataField="symbol" dataType="string" />
                <Column dataField="index" dataType="string" width={150} />
                <Column dataField="score" dataType="number" />
                <Column dataField="typeDisp" dataType="string" />
                <Column dataField="longname" dataType="string" />
                <Column dataField="exchDisp" dataType="string" />
                <Column dataField="sector" dataType="string" />
                <Column dataField="industry" dataType="string" />
                <Column dataField="isYahooFinance" dataType="boolean" />
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
