import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import useStyles from './styles';

const ListCards = (props) => {
    // const classes = useStyles()

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: "310px", width: "757px",textAlign:"center",backgroundColor:"#378CE7",color:"white"}}>
                    <CardContent>
                        <Typography variant='h5'>{props.target}</Typography>
                        <Typography variant='h5'>{props.equipment}</Typography>
                        <img src={props.gifUrl} alt={props.name} style={{ maxWidth: '100%', maxHeight: '150px', marginTop: '10px' }} />
                    </CardContent>
                </Card>
            </Grid>
            {/* Add more Grid items as needed */}
        </>
    )
}

export default ListCards;
