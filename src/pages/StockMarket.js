import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MyDrawer from '../components/common/drawer';
import { invokeStockFunction } from '../services/invokeFunctionService';
import './index.css';

export default function StockMarket() {
    
  async function invokefunction() {
    const stock = await invokeStockFunction();
    console.log(stock);
  }

    return (
        <div className='Appcontainer'>
            <MyDrawer />
            <div>
                Implement StockMarket Here
                <Button onClick={invokefunction}>Get Data</Button>
            </div>
        </div>
    );
}
