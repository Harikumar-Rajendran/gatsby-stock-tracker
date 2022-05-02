import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import MyDrawer from '../components/common/drawer';
import './index.css';

export default function ManageUser() {
    return (
        <div className='Appcontainer'>
            <MyDrawer />
            <div>
                Manage User Here
            </div>
        </div>
    );
}
