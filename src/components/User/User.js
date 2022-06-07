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

export default function User(props) {
    const [data, setData] = useState(null);
    const [uRole, setURole] = useState('Analyst');
    const [uFName, setUFName] = useState('');
    const [uLName, setULName] = useState('');
    const [uUserID, setUserID] = useState('');
    const newUser = {
        FirstName: uFName,
        LastName: uLName,
        UserID: uUserID,
        Role: uRole,
    }
    useEffect(() => {
        if (props.PostResponse) {
            setURole('Analyst')
            setUFName('')
            setULName('')
            setUserID('')
        }
    }, [props.PostResponse])

    useEffect(() => {
        setData(props.data);
    }, [props.data])

    const handleRole = (event) => {
        setURole(event.target.value);
    };
    const handleFirstName = (event) => {
        setUFName(event.target.value);
    };
    const handleLastName = (event) => {
        setULName(event.target.value);
    };
    const handleUserID = (event) => {
        setUserID(event.target.value);
    };    
    const handlePost = () => {
        props.PostData(newUser);
    };

    return (
        <div >
            <MyDrawer />
            <div>
                <Typography variant="h6" noWrap component="div" sx={{ display: { sm: "block" }, color: 'black' }} >
                    Add User
                </Typography>

                <Divider />
                <div sx={{ width: '100%' }} style={{ padding: '20px 10px', display: 'flex', justifyContent: 'space-between' }} autoComplete="off" >
                    <TextField id="first-name" label="First Name" variant="outlined" onChange={handleFirstName} value={uFName}/>
                    <TextField id="last-name" label="Last Name" variant="outlined" onChange={handleLastName} value={uLName}/>
                    <TextField id="user-ID" label="User ID" variant="outlined" onChange={handleUserID} value={uUserID}/>
                    <Select labelId="user-role" id="user-role" value={uRole} label="Role" onChange={handleRole} >
                        <MenuItem value={'Analyst'}>Analyst</MenuItem>
                        <MenuItem value={'Admin'}>Admin</MenuItem>
                    </Select>
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
        </div >
    );
}
