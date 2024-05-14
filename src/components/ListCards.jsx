import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ListCards = (props) => {
    return (
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '332px', width: '700.66px' }}>
            <Link to={`/exercise/${props.number}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card sx={{ height: '300px', width: '400px', textAlign: 'center', backgroundColor: '#378CE7', color: 'white', margin: '150.33px' }}>
                <CardContent>
                    {/* <img src={props.gifUrl} alt={props.name} style={{ maxWidth: '100%', maxHeight: '150px', marginTop: '10px' }} /> */}
                </CardContent>
                <CardActions sx={{ marginTop: '15px', padding: '20px' }}>
                    <Typography variant='h7'>target</Typography>
                    <Typography variant='h7'>equipment</Typography>
                    <Button variant='contained'>Instructions</Button>
                </CardActions>
            </Card>
        </Link>
        </Grid >
    );
};

export default ListCards;
