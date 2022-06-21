import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "gatsby";
import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import PsychologyTwoToneIcon from '@mui/icons-material/PsychologyTwoTone';
import SummarizeTwoToneIcon from '@mui/icons-material/SummarizeTwoTone';
import GroupTwoToneIcon from '@mui/icons-material/GroupTwoTone';
import SettingsInputCompositeTwoToneIcon from '@mui/icons-material/SettingsInputCompositeTwoTone';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import MyAppBar from './header';

const drawerWidth = 240;
const mobileWidth = 80;
export default function MyDrawer() {
    // const userDetails = JSON.parse(localStorage.getItem('ValidUser'))[0];
    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline />
            <MyAppBar />
            <Drawer
                variant="permanent"
                sx={{
                    width: { xs: mobileWidth, md: drawerWidth },
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: { xs: mobileWidth, md: drawerWidth }, boxSizing: 'border-box', marginTop: '60px' },
                }}
            >
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <Link to="/StockMarket" style={{ textDecoration: 'none' }}>
                            <ListItem button >
                                <ListItemIcon>
                                    <AnalyticsTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Stock Market'} sx={{ display: { xs: "none", md: "block" } }} />
                            </ListItem>
                        </Link>
                        <Link to="/MyPreference" style={{ textDecoration: 'none' }}>
                            <ListItem button >
                                <ListItemIcon>
                                    <PsychologyTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText primary={'My Preference'} sx={{ display: { xs: "none", md: "block" } }} />
                            </ListItem>
                        </Link>
                        <Link to="/BatchReport" style={{ textDecoration: 'none' }}>
                            <ListItem button >
                                <ListItemIcon>
                                    <SummarizeTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Batch Report'} sx={{ display: { xs: "none", md: "block" } }} />
                            </ListItem>
                        </Link>
                    </List>
                    {/* {userDetails.Role == 'Admin' && */}
                        <><Divider />
                            <List>
                                <Link to="/ManageUser" style={{ textDecoration: 'none' }}>
                                    <ListItem button >
                                        <ListItemIcon>
                                            <GroupTwoToneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={'Manage User'} sx={{ display: { xs: "none", md: "block" } }} />
                                    </ListItem>
                                </Link>
                                <Link to="/ManageAPI" style={{ textDecoration: 'none' }}>
                                    <ListItem button >
                                        <ListItemIcon>
                                            <SettingsInputCompositeTwoToneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={'Manage API'} sx={{ display: { xs: "none", md: "block" } }} />
                                    </ListItem>
                                </Link>
                            </List>
                        </>
                    {/* } */}
                </Box>
            </Drawer>
        </Box>
    );
}
