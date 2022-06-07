import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import MyDrawer from '../../components/common/drawer';
import 'devextreme/dist/css/dx.light.css';
import DevXDataGrid from '../../components/common/datagrid';

export default function API(props) {
    const [data, setData] = useState(props.data);
    const [pApiID, setApiID] = useState('');
    const [pMethod, setMethod] = useState('');
    const [pEndPoint, setEndPoint] = useState('');
    const [pHeaders, setHeaders] = useState('');
    const [pParams, setParams] = useState('');
    const newRoute = {
        ApiID: pApiID,
        Method: pMethod,
        EndPoint: pEndPoint,
        Headers: pHeaders,
        Params: pParams
    }

    useEffect(() => {
        setData(props.data);
    }, [props.data])

    useEffect(() => {
        if (props.PostResponse) {
            setApiID('')
            setMethod('GET')
            setEndPoint('')
            setHeaders('')
            setParams('')
        }
    }, [props.PostResponse])

    const handleAPIID = (event) => {
        setApiID(event.target.value);
    };
    const handleMethod = (event) => {
        setMethod(event.target.value);
    };
    const handleEndPoint = (event) => {
        setEndPoint(event.target.value);
    };
    const handleHeaders = (event) => {
        setHeaders(event.target.value);
    };
    const handleParams = (event) => {
        setParams(event.target.value);
    };
    const handlePost = () => {
        props.PostData(newRoute);
    };

    return (
        <div >
            <MyDrawer />
            <div>
                <Typography variant="h6" noWrap component="div" sx={{ display: { sm: "block" }, color: 'black' }} >
                    Add Route
                </Typography>

                <Divider />
                <div sx={{ width: '100%' }} style={{ padding: '20px 10px', display: 'flex', justifyContent: 'space-between' }} autoComplete="off" >
                    <TextField id="api-id" label="API ID" variant="outlined" onChange={handleAPIID} value={pApiID} />
                    <Select labelId="user-role" id="user-role" value={pMethod} label="Role" onChange={handleMethod} >
                        <MenuItem value={'GET'}>GET</MenuItem>
                        <MenuItem value={'POST'}>POST</MenuItem>
                    </Select>
                    <TextField id="end-point" label="End Point" variant="outlined" onChange={handleEndPoint} value={pEndPoint} />
                    <TextField id="headers" label="Headers" variant="outlined" onChange={handleHeaders} value={pHeaders} />
                    <TextField id="params" label="Parameters" variant="outlined" onChange={handleParams} value={pParams} />
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <Button variant="contained" onClick={handlePost}>Save</Button>
                    </div>
                </div>
            </div>
            <div>
                <Typography variant="h6" noWrap component="div" sx={{ display: { sm: "block" }, color: 'black' }} >
                    Manage User
                </Typography>
                <Divider />
                <div style={{ padding: '20px 10px', display: 'flex', justifyContent: 'space-between' }}>
                    <DevXDataGrid data={data} GroupPanel={true} SearchPanel={true} />
                </div>
            </div>
        </div>
    );
}
