import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import YTcard from "../components/YTcard";  // Assuming you have a component for YouTube cards

const ExerciseDetail = () => {

    const { id } = useParams();
    const [exercisebyid, setExerciseById] = useState({});
    const [arr, setArr] = useState([]);
    const [YtArr, setYtArr] = useState([]);
    const [YTtext, setYTText] = useState("");

    useEffect(() => {
        const getDataById = async () => {
            const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
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
                setArr(result.instructions);
                setExerciseById(result);
            } catch (error) {
                console.error(error);
            }
        }

        getDataById();
    }, [id]);


    useEffect(() => {
        const getYTData = async () => {
            if (!exercisebyid.name) return;

            const url = 'https://google-api31.p.rapidapi.com/videosearch';
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                    'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
                },
                body: JSON.stringify({
                    text: exercisebyid.name,
                    safesearch: 'off',
                    timelimit: '',
                    duration: '',
                    resolution: '',
                    region: 'wt-wt',
                    max_results: 3
                })
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                console.log(data);
                setYtArr(data.result);
                setYTText("Exercise Videos");
            } catch (error) {
                console.error(error);
            }
        }

        getYTData();
    }, [exercisebyid]);

    return (
        <>
            <Container maxWidth="1180px">
                <Typography variant="h2" marginBottom="50px">
                    Detailed information about selected exercise.
                </Typography>
                <Box margin="20px">
                    <Grid container spacing={4} sx={{ backgroundColor: "#378CE7" }}>
                        <Grid item md={4} sx={{ border: "2px solid #A3D8FF" }} textAlign="center">
                            <Typography variant="h1">
                                {exercisebyid.gifUrl && (
                                    <img src={exercisebyid.gifUrl} alt="Fitness" style={{ width: '400px', height: '500px' }} />
                                )}
                            </Typography>
                        </Grid>
                        <Grid item md={8} sx={{ border: "2px solid #A3D8FF", display: 'flex', justifyContent: 'center', backgroundColor: "#378CE7" }}>
                            <Card sx={{ marginBottom: "30px" }}>
                                <CardContent>
                                    <Typography variant="h3" textAlign="center" marginBottom="50px">
                                        {exercisebyid.name}
                                    </Typography>
                                    <Typography variant="h4">
                                        Instructions
                                    </Typography>
                                    <ol>
                                        {arr.map((instruction, index) => (
                                            <li key={index}>
                                                <Typography>
                                                    {instruction}
                                                </Typography>
                                            </li>
                                        ))}
                                    </ol>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Box marginTop="100px">
                    <Typography sx={{ marginBottom: "50px" }} variant="h3">
                        {YTtext}
                    </Typography>
                    <Grid container spacing={2}>
                        {YtArr.map((element, index) => (
                            <Grid item md={4} key={index}>
                                <a href={element.content} style={{ textDecoration: 'none' }}>
                                    <Card sx={{
                                        transitionDuration: '.5s', '&:hover': {
                                            transform: 'translateY(-5px)',
                                            cursor: 'pointer'
                                        },
                                    }}>
                                        <CardContent>
                                            <img src={element.images.large} alt="YouTube thumbnail" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                                        </CardContent>
                                    </Card>
                                </a>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default ExerciseDetail;
