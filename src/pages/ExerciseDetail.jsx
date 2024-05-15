import { Container, Typography } from "@mui/material";
import { useActionData, useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ExerciseDetail = () => {

    const { id } = useParams()
    const [exercisebyid, setExerciseById] = useState({})
    const [arr, setArr] = useState([])
    const [YtArr, setYtArr] = useState([])
    const [YTtext, setYTText] = useState("")

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
                console.log(result)
                setArr(result.instructions)
                setExerciseById(result)
            } catch (error) {
                console.error(error);
            }
        }

        const getYTData = async () => {
            const url = `https://youtube-search-and-download.p.rapidapi.com/search?query=${exercisebyid.name}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                setYtArr(result.contents);
                setYTText("Look for Videos here")
            } catch (error) {
                console.error(error);
            }
        }

        getDataById()
        getYTData()
    }, [id])

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
                                <img src={exercisebyid.gifUrl} alt="Fitness Image" style={{ width: '400px', height: '500px' }} />
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
                                        {arr.map((instruction) => (
                                            <li>
                                                <Typography>
                                                    {instruction}
                                                </Typography>
                                            </li>
                                        ))}
                                    </ol>
                                </CardContent>
                            </Card>
                            {/* <ExerciseCard rules={exercisebyid.instructions} appellation={exercisebyid.name}/> */}
                        </Grid>
                    </Grid>
                </Box>
                {
                    YtArr.length >= 1 && (
                        <Box marginTop="100px">
                            <Typography sx={{ marginBottom: "50px" }} variant="h3">
                                {YTtext}
                            </Typography>
                            <Grid container>
                                <Grid item md={4}>
                                    <a href="https://www.youtube.com/watch?v=5afQUU8VllM&ab_channel=LiveLeanTVDailyExercises" style={{textDecoration: 'none'}}>
                                        <Card sx={{ marginBottom: "30px" }}>
                                            <CardContent>
                                                <Typography variant="h3" textAlign="center" marginBottom="50px">
                                                    Name
                                                </Typography>
                                                <Typography variant="h4">
                                                    Instructions
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </a>
                                </Grid>
                                <Grid item md={4}>
                                    <Card sx={{ marginBottom: "30px" }}>
                                        <CardContent>
                                            <Typography variant="h3" textAlign="center" marginBottom="50px">
                                                Name
                                            </Typography>
                                            <Typography variant="h4">
                                                Instructions
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item md={4}>
                                    <Card sx={{ marginBottom: "30px" }}>
                                        <CardContent>
                                            <Typography variant="h3" textAlign="center" marginBottom="50px">
                                                Name
                                            </Typography>
                                            <Typography variant="h4">
                                                Instructions
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    )
                }
            </Container>
        </>
    );
}

export default ExerciseDetail;
