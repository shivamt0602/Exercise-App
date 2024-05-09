import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from '@mui/material/Box';
import { Grid, Typography } from "@mui/material";


const ExerciseDetail = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Box sx={{backgroundColor:"yellow"}}>
                <Carousel responsive={responsive} sx={{display : "flex",justifyContent : "space-between"}}>
                    <Grid container>
                        <Grid item md={2}>
                            <Typography>
                                Item 1
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography>
                                Item 2
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography>
                                Item 3
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography>
                                Item 4
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography>
                                Item 5
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography>
                                Item 6
                            </Typography>
                        </Grid>
                    </Grid>
                </Carousel>
            </Box>
        </>
    )
}
export default ExerciseDetail;