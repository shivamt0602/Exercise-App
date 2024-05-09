import fitnessimg from '../Assets/fitnessimg.jpg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


const Home = () => {
    
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
                    <Stack direction="column">
                        <Typography variant='h3' sx={{display : "flex",justifyContent:"center"}}>
                            Awesome exercises 
                            <br/>
                            you should know
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Stack direction="row" spacing={1} padding="50px">
                                <TextField id="outlined-basic" variant="outlined" placeholder='search for exercises' sx={{ width: '500px' }} />
                                <Button variant="contained">Search</Button>
                            </Stack>
                        </Box>
                    </Stack>
                </section>
            </Container>
        </>
    );
}

export default Home;
