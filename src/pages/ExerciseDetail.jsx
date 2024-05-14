import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ExerciseDetail = () => {
    const { id } = useParams()

    const instructions = [
        "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.",
        "Engage your core muscles and lift your knees towards your chest, bending at the hips and knees.",
        "Pause for a moment at the top of the movement, squeezing your abs.",
        "Slowly lower your legs back down to the starting position.",
        "Repeat for the desired number of repetitions."
    ];

    return (
        <>
            <Typography variant="h1" marginBottom="10px">
                {id}
            </Typography>
            <Box margin="20px">
                <Grid container spacing={4}>
                    <Grid item md={4} sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }} textAlign="center">
                        <Typography variant="h1">
                            Image
                        </Typography>
                    </Grid>
                    <Grid item md={8} sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'center'}}>
                        <Card>
                            <CardContent>
                                <Typography variant="h4" textAlign="center">
                                    Exercise Name
                                </Typography>
                                <Typography variant="h4">
                                    Instructions
                                </Typography>
                                <ol>
                                    {instructions.map((instruction, index) => (
                                        <li key={index}>
                                            <Typography>
                                                {instruction}
                                            </Typography>
                                        </li>
                                    ))}
                                </ol>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default ExerciseDetail;
