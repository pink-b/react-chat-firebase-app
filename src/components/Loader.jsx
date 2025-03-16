import React from 'react';
import { Box, Button, Container, Grid } from '@mui/material';


const Loader = () => {
    return (
        <Container>
        <Grid 
            container 
            style={{ height: window.innerHeight - 200 }} 
            alignItems={"center"} 
            justifyContent={"center"}
        >
            <span class="loader"></span>
        </Grid>
    </Container>
    );
};

export default Loader;