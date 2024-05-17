import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const YTcard = (props) => {

    return (
        <>
            <a href={props.vidUrl} style={{ textDecoration: 'none' }}>
                <Card sx={{ marginBottom: "30px" }}>
                    <CardContent>
                    <img src={props.imageUrl}/>
                    </CardContent>
                </Card>
            </a>
        </>
    )
}

export default YTcard;