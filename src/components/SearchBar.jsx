import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import "react-multi-carousel/lib/styles.css";
import Box from '@mui/material/Box';
import { HashLink as Link } from 'react-router-hash-link';

const SearchBar = (props) => {

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
                        <TextField id="outlined-basic" variant="outlined" placeholder='search for exercises' sx={{ width: '500px' }} onChange={props.change} value={props.quest} />
                        <Link to="#listOfExercises" scroll={props.scrollstyle}>
                            <Button variant="contained" onClick={props.click} sx={{height:"61px"}}>Search</Button>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}

export default SearchBar;