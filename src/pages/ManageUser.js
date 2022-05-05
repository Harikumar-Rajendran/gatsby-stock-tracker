import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import { Column } from 'devextreme-react/data-grid';
import Divider from '@mui/material/Divider';
import MyDrawer from '../components/common/drawer';
import { invokeUserFunction } from '../services/invokeFunctionService';
import 'devextreme/dist/css/dx.light.css';
import DevXDataGrid from '../components/common/datagrid';
import './index.css';

export default function ManageUser() {
    const [data, setData] = useState(null);
    const pageSizes = [10, 25, 50, 100];

    async function invokefunction() {
        const userList = await invokeUserFunction();
        setData(userList.data.messge.user);
        console.log(userList.data.messge.user);
    }

    const columns = () => {
        return (
            <>
                <Column dataField="FirstName" dataType="string" />
                <Column dataField="LastName" dataType="string" />
                <Column dataField="Email" dataType="string" />
                <Column dataField="Role" dataType="string" />
            </>
        )
    }

    return (
        <div className='Appcontainer'>
            <MyDrawer />
            <div>

            </div>
            <Divider />
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
