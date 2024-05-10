import fitnessimg from '../Assets/fitnessimg.jpg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar'
import Bodyparts from '../components/Bodyparts';
import getExercices from '../Assets/fetchbodyData';

const Home = () => {

    const [items, Setitems] = useState([])

    const getExercices = async () => {

        const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
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
            console.log(result.length);
            Setitems(result)
        } catch (error) {
            console.error(error);
            Setitems(error);
        }
    }


    useEffect(() => {
        getExercices()
    }, []);


    return (
        <>
            {/* <h1>Home</h1>
            <img src={fitnessimg} alt="Fitness Image" style={{ width: '200px', height: '150px' }}/> */}
            <Container maxWidth="1080px">
                <section>
                    <Grid container>
                        <Grid item md={5} display="flex" justifyContent="center" alignItems="center">
                            <Box sx={{ marginBottom: "250px", backgroundColor: "#378CE7", color: "white", padding: "100px", borderRadius: "100px" }}>
                                <Typography variant='h3' sx={{ marginBottom: '50px' }}>
                                    Fitness Club
                                </Typography>
                                <Typography gutterBottom variant='h4' sx={{ marginBottom: "50px" }}>
                                    Eat,Smile,sweat
                                    <br />
                                    and Repeat
                                </Typography>
                                <Button variant="contained" sx={{ backgroundColor: "#2455A3", color: "#ECECEC", borderRadius: "30px" }}>Explore Exercises</Button>
                            </Box>
                        </Grid>
                        <Grid item md={7} style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                            <img src={fitnessimg} alt="Fitness Image" style={{ width: '1080.33px', height: '1080.33px' }} />
                        </Grid>
                    </Grid>
                </section>
                <section style={{ marginTop: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <SearchBar />
                </section>
                <section>
                    <Bodyparts regions={items} />
                </section>
            </Container>
        </>
    );
}

export default Home;
