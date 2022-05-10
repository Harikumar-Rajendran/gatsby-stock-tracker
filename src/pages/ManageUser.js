import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import { Column } from 'devextreme-react/data-grid';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import MyDrawer from '../components/common/drawer';
import { createUser, readAll, readUser } from '../services/invokeFunctionService';
import 'devextreme/dist/css/dx.light.css';
import DevXDataGrid from '../components/common/datagrid';
import { ParseUser } from '../helper/util';
import './index.css';

export default function ManageUser() {
    const [data, setData] = useState(null);
    const pageSizes = [10, 25, 50, 100];
    const [uRole, setURole] = React.useState('Analyst');
    const [uFName, setUFName] = React.useState('');
    const [uLName, setULName] = React.useState('');
    const [uUserID, setUserID] = React.useState('');
    // Todo data
    const newUser = {
        FirstName: uFName,
        LastName: uLName,
        UserID: uUserID,
        Role: uRole,
    }

    // async function invokefunction() {
    //     const userList = await getUserList();
    //     setData(userList.data.messge.user);
    //     console.log(userList.data.messge.user);
    // }

    // function invokePostFunction() {
    //     // create it!
    //     createUser(newUser).then((response) => {
    //         console.log('API response', response)
    //         // set app state
    //     }).catch((error) => {
    //         console.log('API error', error)
    //     })

    // }

    function invokeCreateFunction() {
        if (uFName !== '' && uLName !== '' && uUserID !== '' && uRole !== '') {
            createUser(newUser).then((response) => {
                console.log('API response', response)
                setUFName('');
                setULName('Analyst');
                setUserID('');
                invokeReadAllFunction();
            }).catch((error) => {
                console.log('API error', error)
            })
        }
    }

    function invokeReadUserFunction() {
        readUser().then((response) => {
            console.log('API response', response)
            setData([JSON.parse(response.data.data.body)])
        }).catch((error) => {
            console.log('API error', error)
        })

    }

    function invokeReadAllFunction() {
        readAll().then((response) => {
            console.log('API response', ParseUser((response.data)));
            setData(ParseUser((response.data)))
        }).catch((error) => {
            console.log('API error', error)
        })

    }

    useEffect(() => {
        invokeReadAllFunction();
    }, [])

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
    const columns = () => {
        return (
            <>
                <Column dataField="FirstName" dataType="string" />
                <Column dataField="LastName" dataType="string" />
                <Column dataField="UserID" dataType="string" />
                <Column dataField="Role" dataType="string" />
            </>
        )
    }

    return (
        <div className='Appcontainer'>
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
                        <Button variant="contained" onClick={invokeCreateFunction}>Save</Button>
                    </div>
                </div>
            </div>
            <div>
                <Typography variant="h6" noWrap component="div" sx={{ display: { sm: "block" }, color: 'black' }} >
                    Manage User
                </Typography>
                <Divider />
                <div style={{ padding: '20px 10px', display: 'flex', justifyContent: 'space-between' }}>
                    <DevXDataGrid
                        data={data}
                        GroupPanel={true}
                        SearchPanel={true}
                        columns={columns}
                    />
                </div>
            </div>
        </div >
    );
}
