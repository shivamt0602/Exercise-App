import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Bodyparts = (props) => {

    const fetchBodypartExerciseData = async (bodypart) => {
        const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}?limit=30`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            props.setSelectedItem(result)
        } catch (error) {
            console.error(error);
        }
    }

    const handleCarouselClick = (bodypart) => {
        fetchBodypartExerciseData(bodypart)
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <Box>
            <Carousel responsive={responsive}>
                {Array.isArray(props.regions) && props.regions.map((item, index) => (
                    <div key={index}>
                        <Card sx={{
                            minWidth: 200, backgroundColor: "#378CE7", margin: "5px", height: "300px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", cursor: "pointer",
                            transitionDuration: '.5s',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                cursor: 'pointer',
                            },
                        }} onClick={() => handleCarouselClick(item)}>
                            <CardContent>
                                <FitnessCenterIcon sx={{ height: "100px", width: "100px", color: "white" }} />
                                <Typography variant="h4" color="white" gutterBottom>
                                    {item}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" sx={{color:'white'}}>click to learn more</Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </Carousel>
        </Box>
    );
}

export default Bodyparts;