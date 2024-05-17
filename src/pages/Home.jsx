import fitnessimg from '../Assets/fitnessimg.jpg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar'
import Bodyparts from '../components/Bodyparts';
import ListCards from '../components/ListCards';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Home = () => {

    const [items, Setitems] = useState([])
    const [search, Setsearch] = useState("")
    const [exercises, setExercises] = useState([])
    const [text, setText] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    // const arr = []

    // for (let i = 0; i < 21; i++) {
    //     arr[i] = i + 1;
    // }

    const ExercisePerPage = 9;

    const indexOfLastExercise = currentPage * ExercisePerPage;
    const indexOfFirstExercise = indexOfLastExercise - ExercisePerPage;

    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (event, value) => {
        setCurrentPage(value)
    }

    const LoadExercises = async () => {

        console.log("inside the loadexercises function")
        const url = `https://exercisedb.p.rapidapi.com/exercises/name/${search}?limit=100`;
        console.log(url)
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
            setExercises(result)
        } catch (error) {
            console.error(error);
        }
    }


    const handleChange = (event) => {
        const new_val = event.target.value.toLowerCase();
        Setsearch(new_val)
    }


    const handleClick = async () => {

        await LoadExercises()

    }


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
        console.log(getExercices())
    }, []);


    return (
        <>
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
                    <SearchBar quest={search} change={handleChange} click={handleClick} />
                </section>
                <section>
                    <Bodyparts regions={items} selectedItem = {exercises} setSelectedItem={setExercises}/>
                </section>
                <section style={{ marginTop: "100px" }}>
                    {
                        exercises.length >= 1 && (
                            <>
                                <Typography variant='h4' gutterBottom>
                                    {text}
                                </Typography>
                                <Box sx={{ margin: "5px" }}>
                                    <Grid container spacing={4}>
                                        {
                                            currentExercises.map((exercise, index) => {
                                                return (
                                                    <>
                                                        <ListCards key={index}
                                                            target={exercise.target}
                                                            equipment={exercise.equipment}
                                                            gifUrl={exercise.gifUrl}
                                                            name={exercise.name}
                                                            identity={exercise.id} />

                                                        {/* <ListCards key={index} number={element}/> */}
                                                    </>
                                                )
                                            })
                                        }
                                    </Grid>
                                </Box>
                            </>
                        )
                    }
                    <Stack spacing={2} justifyContent="center" alignItems="center" marginTop="50px">
                        {exercises.length > 9 && (
                            <Pagination
                                color="primary"
                                defaultPage={1}
                                count={Math.ceil(exercises.length / ExercisePerPage)}
                                page={currentPage}
                                onChange={paginate}
                                size='large'
                            />
                        )}
                    </Stack>
                </section>
            </Container>
        </>
    );
}

export default Home;
