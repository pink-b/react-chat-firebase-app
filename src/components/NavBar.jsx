import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

const NavBar = () => {

    const user = true;

    return (
        <AppBar position="static">
        <Toolbar variant={"dense"}>
            <Grid container justifyContent="flex-end">
                {user ?
                <Grid>
                    <Button variant="outlined" color="inherit" sx={{marginRight: "10px"}}>
                        Логин
                    </Button>
                    <Button variant="outlined" color="inherit">
                        Регистрация
                    </Button>
                </Grid>
                : 
                <NavLink to={LOGIN_ROUTE}>
                    <Button variant={"outlined"} color="inherit">Выйти</Button>
                </NavLink>
                } 
                
                
            </Grid>
        </Toolbar>
        </AppBar>
    );
};

export default NavBar;