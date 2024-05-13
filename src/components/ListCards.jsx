import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';

const ListCards = (props) => {
    // const classes = useStyles()

    return (
        <>
            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "332px", width: "700.66px" }}>
                <Card sx={{ height: "300px", width: "400px", textAlign: "center", backgroundColor: "#378CE7", color: "white", margin: "150.33px" }}>
                    <CardContent>
                        <img src={props.gifUrl} alt={props.name} style={{ maxWidth: '100%', maxHeight: '150px', marginTop: '10px' }} />
                    </CardContent>
                    <CardActions sx={{marginTop:"15px",padding:"20px"}}>
                        <Typography variant='h7'>{props.target}</Typography>
                        <Typography variant='h7'>{props.equipment}</Typography>
                        <Button variant="contained">Instructions</Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* Add more Grid items as needed */}
        </>
    )
}

export default ListCards;
