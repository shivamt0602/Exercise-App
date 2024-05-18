import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation();

    const smoothScroll = (el) => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
            <AppBar style={{ paddingLeft: '50px' }}>
                <Toolbar style={{ padding: "10px" }}>
                    <FitnessCenterIcon marginright="20px" />
                    <Typography marginRight="180px" variant="h5" marginLeft="10px">
                        FitnessPal
                    </Typography>
                    <Stack direction="row" spacing={10}>
                        <Typography variant="h5">
                            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                        </Typography>
                        {location.pathname === "/" && (
                            <Typography variant="h5">
                                <Link to='#searchExercises' style={{ textDecoration: 'none', color: 'inherit' }} scroll={smoothScroll}>Exercises</Link>
                            </Typography>
                        )}
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Nav;
