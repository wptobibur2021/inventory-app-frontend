import React from 'react';
import { Typography, Grid, Box } from '@mui/material'
const Footer = () => {

    return (
        <Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={12} sm={12} md={12} sx={{ py: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ textAlign: 'center' }} variant="p">
                        &copy; Copyright 2022. Design & Development by <a href="https://techbd71.com/" target='_blank'>TechBD71</a>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;