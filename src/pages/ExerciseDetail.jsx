import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const ExerciseDetail = () => {
    const {id} = useParams()
    return (
        <Typography variant="h1">
            Exercise Details-{id}
        </Typography>
    );
}

export default ExerciseDetail;
