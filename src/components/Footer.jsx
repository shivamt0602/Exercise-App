import React from 'react';
import { Typography, Container, Grid, Link } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ marginTop: '50px', backgroundColor: '#f0f0f0', padding: '20px 0' }}>
            <Container>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item>
                        <Typography variant="body1" color="textSecondary" align="center">
                            © 2024 Gym App. All rights reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
