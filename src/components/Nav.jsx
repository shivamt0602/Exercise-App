import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';


const Nav = () => {
    return (
        <>
            <AppBar style={{paddingLeft : '50px'}}>
                <Toolbar style={{padding:"10px"}}>
                    <FitnessCenterIcon marginright="20px"/>
                    <Typography marginRight="180px" variant="h5" marginLeft="10px">
                        FitnessPal
                    </Typography>
                    <Stack direction="row" spacing={10}>
                        <Typography variant="h5">
                            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                        </Typography>
                        <Typography variant="h5">
                            <Link to='/Exercise' style={{ textDecoration: 'none', color: 'inherit' }}>Exercises</Link>
                        </Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Nav;
