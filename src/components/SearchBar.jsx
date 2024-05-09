import fitnessimg from '../Assets/fitnessimg.jpg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

const SearchBar = () => {

    const [items,Setitems] = useState([])

    const getExercices = async () => {
       
        const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a37dd5b70amsh7ea8a1f5269a327p16d6cdjsnaa71a6469b77',
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
        }
    }

    useEffect(() => {
        getExercices()
    }, []);

    return (
        <>
            <Stack direction="column">
                <Typography variant='h3' sx={{ display: "flex", justifyContent: "center" }}>
                    Awesome exercises
                    <br />
                    you should know
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Stack direction="row" spacing={1} padding="50px">
                        <TextField id="outlined-basic" variant="outlined" placeholder='search for exercises' sx={{ width: '500px' }} />
                        <Button variant="contained">Search</Button>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}

export default SearchBar;