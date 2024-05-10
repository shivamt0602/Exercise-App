import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import "react-multi-carousel/lib/styles.css";
import Box from '@mui/material/Box';

const SearchBar = () => {

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